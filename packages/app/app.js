const path = require('path');

require('apostrophe')({
  shortName: 'app',
  baseUrl: process.env.APP_BASE_URL || null,

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/@apostrophecms/assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here to turn them on: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    '@corllete/apos-ds': {
      options: {
        enabled: true,
        modules: [ 'myui' ]
      },
      // override the docs top category so doc stories are not shown in category lists
      // all subcategory lists will be autmatically disabled as well
      categories: {
        add: {
          'ds-docs': {
            label: 'Docs',
            list: false
          }
        }
      }
    },
    '@corllete/apos-ds-page-type': {
      options: {
        docs: true
        // Set how the index behaves - show a button story by id
        // home: 'atoms-buttons-button'

        // We don't have a plan how to render e.g. JSON from nunjucks
        // because the new code parser is not allowing evaluation of nunjucks.
        // We stick with legacy for now, and we might need to introduce another custom tag.
        // legacyCodeBlocks: false
      }
    },

    '@apostrophecms/template': {
      options: {
        viewsFolderFallback: path.join(__dirname, 'views')
      }
    },

    // Custom CSS classes for standard apostrophe widgets
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // Manages apostrophe's overall asset pipeline
    '@apostrophecms/asset': {
      // When not in production, refresh the page on restart
      options: {
        refreshOnRestart: true
      }
    },

    '@apostrophecms/express': {
      options: {
        session: {
          // If this still says `undefined`, set a real secret!
          secret: 'wndfGxffCv9tiwUbXVfRBBjsXY7CfFwC'
        }
      }
    },

    // A home for our own project-specific javascript and SASS assets
    asset: {},
    'default-page': {},

    // Our UI components, documented by the design system
    myui: {}

  }
});
