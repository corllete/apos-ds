const _ = require('@sailshq/lodash');

module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    alias: 'dsp',
    // Set project name shown in UI/page meta data
    // If empty the page.title will be used
    projectName: null
  },

  init(self) {},

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

  methods(self, options) {
    self.previewRoute = '/__preview';

    const {
      getParentCategories,
      markActiveCategories,
      markActiveStory
    } = require('./lib/utils');

    return {
      // get css asset path/tag
      stylesheetHelper(name, pathOnly = false) {
        let base;
        if (process.env.NODE_ENV === 'production') {
          const releaseId = self.apos.asset.getReleaseId();
          const uploadfsFolder = `/assets/${releaseId}`;
          base = `${self.apos.attachment.uploadfs.getUrl()}${uploadfsFolder}/apos-ds/css`;
        } else {
          base = '/apos-ds/css';
        }
        const path = `${base}/${name}.css`;
        if (pathOnly) {
          return path;
        }
        const bundle = `<link href="${path}" rel="stylesheet" />`;
        return self.apos.template.safe(bundle);
      },

      // get js asset path/tag
      scriptHelper(name, pathOnly = false) {
        let base;
        if (process.env.NODE_ENV === 'production') {
          const releaseId = self.apos.asset.getReleaseId();
          const uploadfsFolder = `/assets/${releaseId}`;
          base = `${self.apos.attachment.uploadfs.getUrl()}${uploadfsFolder}/apos-ds/js`;
        } else {
          base = '/apos-ds/js';
        }
        const path = `${base}/${name}.js`;
        if (pathOnly) {
          return path;
        }
        const bundle = `<script type="text/javascript" src="${base}/${name}.js"></script>`;
        return self.apos.template.safe(bundle);
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
      async themePage(req) {
        self.setTemplate(req, 'theme');
      },

      // module index - list all stories
      async indexPage(req) {
        const page = req.data.page;
        req.data.previewUrl = `${page._url}${self.previewRoute}`;

        await self.setCommonContext(req);
        self.setTemplate(req, 'index');
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
