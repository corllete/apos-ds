const path = require('path');
const fs = require('fs');
// const util = require('util');
// const glob = util.promisify(require('glob'));
const { glob } = require('glob');

/**
 * Methods to initialize module options and based on them to discover
 * and process all stories and their metadata.
 *
 * Depends on following Apostrophe context:
 * - {Array} sources - initially empty property
 * - {Array} paths - initially empty property
 * - {Object} config - initially empty property
 * - {Object} storyIndex - initially empty property
 * - {Object} categories - optional initial category configuration which will be
 *    extendend and replaced with the detailed metadata required; if empty
 *    (or have missing options) will be built/extended on the fly with default settings
 *
 * @param {Object} self Apostrophe 3 context
 * @param {Object} options module options
 */
module.exports = function (self, options) {
  const {
    css,
    trim,
    warn,
    warnDevOnce
  } = require('./utils')(self);

  // Process a source, store file locations in self.paths
  async function initSource(source) {
    const opts = {};
    const configs = await glob(source.path, opts);
    self.paths = self.paths.concat(configs.map(c => ({
      module: source.module,
      path: c
    })));
  }

  // Initialize category from options or raw config
  function initCategory(name, cateogry) {
    const processed = Object.assign({}, cateogry, {
      _id: css(name),
      // Items index in this category
      items: [],
      // All items index to be shown in list mode
      all: [],
      // next level down index
      children: new Set(),
      // previous level up index
      parents: new Set()
    });

    if (typeof processed.list === 'undefined') {
      processed.list = true;
    }

    return processed;
  }

  function resolveDataPath(fpath, relativeTo) {
    const p = fpath.replace('{rootDir}', path.resolve(self.apos.rootDir));
    if (p[0] === '/') {
      return p;
    }
    return path.join(path.resolve(relativeTo), p);
  }

  // Load json data if data provided is a file path
  function loadStoryData(fpathOrData, configPath) {
    if (!fpathOrData || typeof fpathOrData !== 'string') {
      return fpathOrData || {};
    }
    const resolved = resolveDataPath(fpathOrData, configPath);
    return JSON.parse(fs.readFileSync(resolved));
  }

  // Initialize story from a raw config
  const initConfigStory = (config, categories, index, configPath) => (story) => {
    if (!story.name) {
      warn(`Story is missing a name field:\n${JSON.stringify(story, null, 4)}`);
      return {};
    }
    const category = categories[config.categoryId];
    const details = (story.sources || []).length > 0;
    const processed = Object.assign(
      {
        // defaults
        details,
        meta: true,
        list: true
      },
      story,
      {
        _id: css(`${config.name}-${story.name}`),
        module: config.module,
        categoryId: config.categoryId
      }
    );

    try {
      processed.data = loadStoryData(story.data, configPath);
    } catch (e) {
      processed.data = {};
      warn(`Failed to load story data ${story.data}: ${e.message}`);
    }

    index[processed._id] = {
      config: config._id,
      category: category._id
    };
    return processed;
  };

  // Convert back properties from Set to Array
  function finishCategories() {
    for (const [ , cat ] of Object.entries(self.categories)) {
      cat.parents = Array.from(cat.parents);
      cat.children = Array.from(cat.children);
    }
  }

  // Process story config
  function processConfig(module, config, configPath) {
    // category string
    const cat = config.category;

    // enhance the config
    if (!config.name) {
      warn(`Config is missing a category field:\n${JSON.stringify(config, null, 4)}`);
      return {};
    }

    const cfg = Object.assign({}, config, {
      _id: css(config.name),
      module
    });

    // Process category for this config and build category indexes
    if (cat) {
      const catArr = cat.split(options.categorySeparator).map(trim);
      // const noList = false;
      // const shouldListAll = true;
      const names = [];

      for (let i = 0, catLen = catArr.length; i < catLen; i++) {
        const c = css(catArr[i]);
        const parent = i > 0 ? names.slice(0, i).join('-') : null;
        names.push(c);
        const name = names.join('-');
        // noList = noList === false ? (self.categories[name] || {}).list === false : true;

        if (!self.categories[name]) {
          self.categories[name] = initCategory(name, { label: catArr[i] });
        }

        // Parent/children index
        if (parent && self.categories[parent]) {
          // disable list if the parent says so
          if (self.categories[parent].list === false) {
            self.categories[name].list = false;
          }
          self.categories[name].parents.add(parent);
          self.categories[parent].children.add(name);
        }

        // Disable nested list if we reach disabled list category
        // shouldListAll = !noList;

        // add as item for the last category level
        if (i === catLen - 1) {
          self.categories[name].items.push(cfg._id);
          // add reference to the config
          cfg.categoryId = self.categories[name]._id;
        }

        // add to the all index if list not disabled
        // if (shouldListAll) {
        self.categories[name].all.push(cfg._id);
        // }
      }
    } else {
      warn(`Config ${cat} is missing a category field.`);
    }

    try {
      cfg.data = loadStoryData(cfg.data, configPath);
    } catch (e) {
      cfg.data = {};
      warn(`Failed to load config data ${cfg.data}: ${e.message}`);
    }
    cfg.stories = cfg.stories.map(initConfigStory(cfg, self.categories, self.storyIndex, configPath));
    self.config[cfg._id] = cfg;
  }

  // Init sources passed by options
  // format { module: xxx, paths: [xxx] }
  function initCustomSources(sources) {
    if (sources.length === 0) {
      return;
    }

    for (const source of sources) {
      for (const p of source.paths) {
        self.sources.push(
          {
            module: source.module,
            path: path.join(self.apos.npmRootDir, 'node_modules/', source.module, 'views', p, '/**/', options.configFileGlob)
          },
          {
            module: source.module,
            path: path.join(self.apos.rootDir, 'modules', source.module, 'views', p, '/**/', options.configFileGlob)
          }
        );
      }
    }
  }

  // Initialize registered modules
  function initModules() {
    // FIXME - parse error
    initCustomSources(options.sources || []);

    if (options.modules.length > 0) {
      options.modules.forEach((source) => {
        // As per A3 standard - search first in node_modules, then override with local module
        //
        self.sources = self.sources.concat([
          {
            module: source,
            path: path.join(self.apos.npmRootDir, 'node_modules/', source, 'views', '/**/', options.configFileGlob)
          },
          {
            module: source,
            path: path.join(self.apos.rootDir, 'modules', source, 'views', '/**/', options.configFileGlob)
          }
        ]);
      });
    }
    if (options.docs) {
      const glob = '/**/' + options.configFileGlob;
      const source = '@corllete/apos-ds-page-type';
      self.sources.push(
        {
          module: source,
          path: path.resolve(`${self.apos.npmRootDir}/node_modules/@corllete/apos-ds/modules/${source}/views`) + glob
        },
        {
          module: source,
          path: path.resolve(`modules/${source}/views`) + glob
        }
      );
    }
    if (self.sources.length === 0) {
      warnDevOnce(
        'It seems you forgot to add at least one module as a source of your stories.'
      );
    }
  }

  // Initialize categories from the options
  function initCategories() {
    if (options.docs && !self.categories['ds-docs']) {
      // allow override from a local app
      self.categories['ds-docs'] = {
        label: 'Docs'
      };
    }
    Object.keys(self.categories).forEach((name) => {
      const cat = initCategory(name, self.categories[name]);
      delete self.categories[name];
      self.categories[cat._id] = cat;
    });
  }

  // Process story globs from the sources in the right order
  async function initStoryPaths() {
    for (const s of self.sources) {
      await initSource(s);
    }
  }

  // Build config from paths
  function buildConfig() {
    self.paths.forEach((c) => {
      const fpath = path.resolve(c.path);
      const config = require(fpath);
      processConfig(config.module || c.module, config, path.dirname(fpath));
    });
    finishCategories();
  }

  return {
    initCategories,
    initStoryPaths,
    buildConfig,
    initModules
  };
};
