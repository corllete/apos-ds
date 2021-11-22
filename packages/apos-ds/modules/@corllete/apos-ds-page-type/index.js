const fs = require('fs');
const path = require('path');
const _ = require('@sailshq/lodash');

module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    alias: 'dsp',
    // Set project name shown in UI/page meta data
    // If empty the page.title will be used
    projectName: null
  },

  init(self) {
    self.hasRemoteAssets = !!process.env.APOS_UPLOADFS_ASSETS;
    self.isProduction = process.env.NODE_ENV === 'production';
  },

  // We need a static reference to apos.ds, so initialization happens
  // after everything is initialized
  async afterAllSections(self, options) {
    if (!self.apos.ds.options.enabled) {
      return;
    }

    // register URL callbacks with the main module
    await self.enableAddUrlsToCategories();
    await self.enableAddUrlsToStories();

    // add all routes
    self.dispatchAll();
  },

  tasks: require('./lib/tasks'),

  helpers: require('./lib/helpers'),

  customTags(self) {
    return {
      ...require('./lib/tags')(self),
      asyncFix: {
        async run() {
          return '';
        }
      }
    };
  },

  methods(self, options) {
    self.previewRoute = '/__preview';

    const {
      getParentCategories,
      markActiveCategories,
      markActiveStory
    } = require('./lib/utils');

    return {
      getAssetNamespace() {
        return 'ds';
      },

      getBaseAposPublicPath() {
        return '/apos-frontend/releases';
      },

      // get full path of modules/@corllete/apos-ds-page-type/ui
      // as dependency or not; optionally check if /dist should be added
      getBaseAssetLocalPath(asDep, checkDist) {
        const dist = '/dist';
        const uiPath = path.join(
          self.apos.rootDir,
          asDep ? '/node_modules/@corllete/apos-ds' : '',
          '/modules/@corllete/apos-ds-page-type/ui'
        );

        if (!checkDist) {
          return uiPath;
        }

        // when installed as npm module only ui/dist is available
        // so basic exist test for ui/js folder should be fine without breaking
        // the module development
        if (self.isProduction || !fs.existsSync(path.join(uiPath, '/js'))) {
          return path.join(uiPath, dist);
        }
        return uiPath;
      },

      getBaseAssetReleasePath(pub, forceLocal = false) {
        // /apos-frontend/releases/XXX/ds
        if (!forceLocal && self.hasRemoteAssets) {
          return path.join(
            self.getBaseAposPublicPath(),
            self.apos.asset.getReleaseId(),
            self.getAssetNamespace()
          );
        }

        // /rootPath/public/apos-frontend/releases/XXX/ds
        const base = pub ? '/' : path.join(self.apos.rootDir, 'public');
        return path.join(
          base,
          self.getBaseAposPublicPath(),
          self.apos.asset.getReleaseId(),
          self.getAssetNamespace()
        );
      },

      getAssetHelperBaseUrl() {
        let base = '';
        if (self.hasRemoteAssets && self.isProduction) {
          base = self.apos.uploadfs.getUrl();
        }
        base += self.getBaseAssetReleasePath(true);
        return base;
      },

      // get css asset path/tag
      stylesheetHelper(name, pathOnly = false) {
        const base = `${self.getAssetHelperBaseUrl()}/css`;
        const path = `${base}/${name}.css`;

        if (pathOnly) {
          return path;
        }

        return self.apos.template.safe(`<link href="${path}" rel="stylesheet" />`);
      },

      // get js asset path/tag
      scriptHelper(name, pathOnly = false) {
        const base = `${self.getAssetHelperBaseUrl()}/js`;
        const path = `${base}/${name}.js`;

        if (pathOnly) {
          return path;
        }

        return self.apos.template.safe(`<script type="text/javascript" src="${path}"></script>`);
      },

      // register our story url handler
      async enableAddUrlsToStories() {
        await self.apos.ds.setAddStoryUrls(self.addUrlsToStories);
      },

      // add _url property to stories
      async addUrlsToStories(req, configs) {
        const page = req.data.page;
        if (!page) {
          return;
        }
        _.each(configs, (config) => {
          _.each(config.stories, (story) => {
            story.slug = story._id;
            story._url = `${page._url}/${config.categoryId}/${story._id}`;
          });
        });
      },

      // register our category url handler
      enableAddUrlsToCategories() {
        self.apos.ds.setAddCategoryUrls(self.addUrlsToCategories);
      },

      // add _url property to categories
      addUrlsToCategories(req, categories) {
        const page = req.data.page;
        if (!page) {
          return;
        }
        _.each(categories, (cat, id) => {
          cat.slug = id;
          cat._url = `${page._url}/${id}`;
        });
      },

      getStory(id, config) {
        const storyConfig = self.apos.ds.getStoryConfigFor(id);
        if (!storyConfig || !config) {
          return;
        }
        return (config[storyConfig._id] || [ { stories: [] } ]).stories.find(s => s._id === id);
      },

      // the common context for all owned routes
      async setCommonContext(req) {
        await Promise.all([
          self.apos.ds.setCategoryContext(req),
          self.apos.ds.setStoryContext(req)
        ]);
        req.data.projectName = options.projectName || (req.data.page ? req.data.page.title : '');

        if (req.params.category) {
          req.data.categoryId = req.params.category;
          req.data.category = req.data.categories[req.params.category];
          markActiveCategories(req.params.category, req.data.categories);
        }

        if (req.params.story) {
          req.data.storyId = req.params.story;
          req.data.storyConfig = _.find(
            req.data.config,
            c => _.findIndex(c.stories, (s) => s.slug === req.params.story) !== -1
          );
          if (req.data.storyConfig) {
            req.data.story = req.data.storyConfig.stories.find(s => s.slug === req.params.story);
          }
          markActiveStory(req.params.story, req.data.config);
        }
      },

      // this will go soon
      // this is gone
      // async themePage(req) {
      //   self.setTemplate(req, 'theme');
      // },

      // module index - list all stories
      async indexPage(req) {
        const page = req.data.page;
        await self.setCommonContext(req);

        async function renderStory(story) {
          self.setTemplate(req, 'show');
          req.params.category = story.categoryId;
          req.params.story = story._id;
          await self.setCommonContext(req);

          req.data.previewUrl = `${page._url}${self.previewRoute}/${req.params.category}/${req.params.story}`;

        }

        // by default render the story
        if (typeof self.options.home === 'string') {
          const story = self.getStory(self.options.home, req.data.config);
          if (story) {
            return renderStory(story);
          }
        } else if (self.options.home && self.options.home.story) {
          const story = self.getStory(self.options.home.story, req.data.config);

          // redirect
          if (story && self.options.home.redirect) {
            req.redirect = story._url;
            return;
          }

          // OR render the story without redirect
          if (story) {
            return renderStory(story);
          }
        }

        self.setTemplate(req, 'index');
        req.data.previewUrl = `${page._url}${self.previewRoute}`;
      },

      // list the stories that belong to a given category
      async categoryPage(req) {
        self.setTemplate(req, 'category');

        const page = req.data.page;
        req.data.previewUrl = `${page._url}${self.previewRoute}/${req.params.category}`;

        await self.setCommonContext(req);
      },

      // detailed story view
      async showPage(req) {
        self.setTemplate(req, 'show');

        const page = req.data.page;
        req.data.previewUrl = `${page._url}${self.previewRoute}/${req.params.category}/${req.params.story}`;

        await self.setCommonContext(req);
      },

      // the story preview mode (inside of iframe)
      async previewPage(req) {
        let template;
        if (req.params.story) {
          template = 'preview/show';
        } else if (req.params.category) {
          template = 'preview/category';
        } else {
          template = 'preview/index';
        }
        self.setTemplate(req, template);

        await self.setCommonContext(req);
        req.data.rootCategories = getParentCategories(req.data.categories);
      },

      dispatchAll() {
        self.dispatch('/', self.indexPage);
        self.dispatch('/__theme', self.themePage);
        self.dispatch(`${self.previewRoute}/:category/:story`, self.previewPage);
        self.dispatch(`${self.previewRoute}/:category`, self.previewPage);
        self.dispatch(self.previewRoute, self.previewPage);
        self.dispatch('/:category/:story', self.showPage);
        self.dispatch('/:category', self.categoryPage);
      }
    };
  }

  // Another way to register tags, not usable here
  // customTags(self, options) {
  //   return {
  //     tagname: { run: (req, doc, name, context) => { }, parse: (parser, nodes, lexer) => {} }
  //   }
  // }
};
