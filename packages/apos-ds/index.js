module.exports = {
  bundle: {
    modules: [ '@corllete/apos-ds-page-type', '@corllete/apos-ds-template' ],
    directory: 'modules'
  },

  cascades: [ 'categories' ],

  options: {
    alias: 'ds',
    label: 'Design System',

    enabled: true,
    modules: [],
    docs: true,
    configFileGlob: '*.stories.js',
    categorySeparator: '::'
  },

  categories: {
    add: {
      atoms: {
        label: 'Atoms'
      },
      molecules: {
        label: 'Molecules'
      },
      organisms: {
        label: 'Organisms'
      },
      templates: {
        label: 'Templates',
        list: false
      },
      pages: {
        label: 'Pages',
        list: false
      }
    }
  },

  async init(self, options) {
    if (!options.enabled) {
      return;
    }

    self.initModules();
    self.initCategories();

    await self.findStoryPaths();
    await self.buildConfig();

    self.checkForWarnings();
  },

  methods(self, options) {
    if (!options.enabled) {
      return {};
    }

    // Initialize memory
    self.sources = [];
    self.paths = [];
    self.config = {};
    self.storyIndex = {};
    // self.categories = options.categories || {};

    const {
      initCategories,
      findStoryPaths,
      buildConfig,
      initModules
    } = require('./lib/story')(self, options);

    const { warnDevOnce } = require('./lib/utils')(self);

    return {
      // Transform option.modules to self.sources
      initModules,

      // Convert options.categories (if any) to self.categories objects
      initCategories,

      // Transform extract paths from self.soruces and store them into self.paths
      findStoryPaths,

      // Go through every path in self.paths and build a single self.config
      // containing all stories data (categories, stories, modules) from every
      // story config found.
      buildConfig,

      async addCategoryUrls(req, categories) {
        // impliement by page type module
      },

      // Register handler to add _url to list of categories, used in pages module
      setAddCategoryUrls(fn) {
        self.addCategoryUrls = fn;
      },

      // Apply all required category filters
      async applyCategoryFilters(req, categories) {
        await self.addCategoryUrls(req, categories);
      },

      // Set the request context for categories, used in pages module
      async setCategoryContext(req) {
        req.data.categories = JSON.parse(JSON.stringify(self.categories));
        await self.applyCategoryFilters(req, req.data.categories);
      },

      async addStoryUrls(req, stories) {
        // impliement by page type module
      },

      // Register handler to add _url to list of stories, used in pages module
      setAddStoryUrls(fn) {
        self.addStoryUrls = fn;
      },

      // Apply all required story filters
      async applyStoryFilters(req, stories) {
        await self.addStoryUrls(req, stories);
      },

      // Set the request context for stories, used in pages module
      async setStoryContext(req) {
        req.data.config = JSON.parse(JSON.stringify(self.config));
        await self.applyStoryFilters(req, req.data.config);
      },

      checkForWarnings() {
        if (self.paths.length === 0) {
          warnDevOnce(
            'No stories found based on your `modules` configuration value:' +
            '\n- ' + self.options.modules.join('\n-')
          );
        }
      },

      debug() {
        self.apos.util.log(self.config);
        self.apos.util.log(self.categories);
      }
    };
  }
};
