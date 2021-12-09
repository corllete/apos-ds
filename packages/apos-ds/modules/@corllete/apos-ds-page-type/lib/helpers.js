// nunjucks helpers
module.exports = function (self) {
  if (!self.apos.ds.options.enabled) {
    return {};
  }

  const { normalizeTypeHelper, normalizeTypeOptionsHelper } = require('./utils.js');

  return {
    /**
     * Id is the last portion of the URL of story preview
     *
     * Usage:
     * `apos.dsp.story('atoms-buttons-fab', data.config)`
     *
     * @param {String} id
     * @param {Object} config the entire story data
     * @returns {Object} story object
     */
    story(id, config) {
      if (!config) {
        return self.apos.ds.getStory(id);
      }

      return self.getStory(id, config);
    },

    /**
     * Id is the last portion of the URL of story preview
     *
     * Usage:
     * `apos.dsp.storyData('atoms-buttons-fab')`
     *
     * @param {String} id
     * @returns {Object} story data
     */
    storyData(id) {
      return (self.apos.ds.getStory(id) || {}).data;
    },

    /**
     * Get stories configuration object
     * Id is the `name` property in your *.stories.js configuration file
     *
     * Usage - get story config for configuration named `atoms-buttons`:
     * `apos.dsp.config('atoms-buttons')`
     *
     * @param {String} id
     * @returns {Object} config object
     */
    config(id) {
      return (self.getStoryConfig(id) || {});
    },

    /**
     * Get data, added to a config of stories (`data` property on the root config object)
     * Id is the `name` property in your *.stories.js configuration file
     *
     * Usage:
     * `apos.dsp.configData('atoms-buttons')`
     *
     * @param {String} id
     * @returns {Object} story data
     */
    configData(id) {
      return (self.getStoryConfig(id) || {}).data;
    },

    /**
     * Get stories configuration object by a story ID
     * Id is the `name` property in your *.stories.js configuration file
     *
     * Usage - get story config for configuration named `atoms-buttons`:
     * `apos.dsp.config('atoms-buttons')`
     *
     * @param {String} storyId
     * @returns {Object} config object
     */
    configFor(storyId) {
      return (self.getStoryConfigFor(storyId) || {});
    },

    /**
     * Get data, added to a config of stories (`data` property on the root config object)
     * by a story id
     *
     * Usage:
     * `apos.dsp.configData('atoms-buttons')`
     *
     * @param {String} storyId
     * @returns {Object} story data
     */
    configDataFor(storyId) {
      return (self.getStoryConfigFor(storyId) || {}).data;
    },

    stylesheet(name, urlOnly = false) {
      return self.stylesheetHelper(name, urlOnly);
    },

    script(name, urlOnly = false) {
      return self.scriptHelper(name, urlOnly);
    },

    // Internals, used in macros/fragments
    // Use it at your own risk, they may change
    storyState(state, small) {
      const cls = small ? ' ds-state--small' : '';
      switch (state) {
        case 'inprogress':
          return self.apos.template.safe(`<span title="In progress" class="ds-state ds-state--inprogress${cls}"></span>`);

        case 'inreview':
          return self.apos.template.safe(`<span title="In review" class="ds-state ds-state--inreview${cls}"></span>`);

        case 'complete':
          return self.apos.template.safe(`<span title="Complete" class="ds-state ds-state--complete${cls}"></span>`);

        default:
          return '';
      }
    },

    storyStateLabel(state, small) {
      // const cls = small ? ' ds-state--small' : '';
      switch (state) {
        case 'inprogress':
          // We are missing partial string parser, investigate and add localization
          // when implemented in A3
          return 'in progress';
          // return self.partialString(null, '{{ __ns("ds", "in progress") }}');

        case 'inreview':
          return 'in review';
          // return self.partialString(null, '{{ __ns("ds", "in review") }}');

        case 'complete':
          return 'complete';
          // return self.partialString(null, '{{ __ns("ds", "complete") }}');

        default:
          return '';
      }
    },

    nextNavType(type) {
      switch (type) {
        case 'group-list':
          return 'sub-group-list';

        case 'sub-group-list':
        default:
          return 'sub-sub-group-list';
      }
    },

    toCollection(arr, idKey = '_id') {
      if (!Array.isArray(arr)) {
        return arr;
      }

      return arr.filter(item => !!item).reduce((acc, item) => {
        return {
          ...acc,
          [item[idKey]]: item
        };
      }, {});
    },

    normalizeHeadings(arr, options = {}) {
      return normalizeTypeHelper(arr, {
        ...options,
        type: 'h'
      });
    },

    normalizeHeadingOptions(options = {}) {
      return normalizeTypeOptionsHelper({
        ...options,
        type: 'h'
      });
    },

    normalizeParagraphs(arr, options = {}) {
      return normalizeTypeHelper(arr, {
        ...options,
        type: 'p'
      });
    },

    normalizeParagraphOptions(options = {}) {
      return normalizeTypeOptionsHelper({
        ...options,
        type: 'p'
      });
    },

    normalizeCustomTypes(arr, options = {}) {
      return normalizeTypeHelper(arr, {
        ...options,
        type: 'custom'
      });
    },

    normalizeCustomTypeOptions(options = {}) {
      return normalizeTypeOptionsHelper({
        ...options,
        type: 'custom'
      });
    },

    // Used only for color palettes
    normalizeColorPalette(arr, options = {}) {
      const opts = { ...options };
      // defaults
      if (typeof opts.showClass === 'undefined') {
        opts.showClass = false;
      }

      return arr
        .map(item => {
          if (typeof item === 'string') {
            return { value: item };
          }
          return item;
        })
        .map(item => ({
          ...options,
          ...item
        }));
    }
  };
};
