module.exports = {
  // Globaly unique!
  name: 'atoms-buttons',
  label: 'Buttons',
  category: 'atoms :: Buttons',
  // We can explicitly set to what module this config belongs.
  // This will be later used for building relationships between your components.
  // It's done auto-magically but it's an escape hatch if
  // (for some unknown reason) the module detection fails.
  // This is used to build the `module:template/path` as implemented by Apostrophe.
  // It also will be used to build components relationships some day (a graph representing
  // how a component is being referenced and what other components it is referencing) - a
  // great way to know how a change to a component reflects on the overall design.
  module: 'ui',
  // We can have as many stories as we want in a single story config.
  // However, the idea is to combine the variations of one and the same
  // component in a single story config.
  stories: [
    {
      //
      // Advanced usage, explore all options
      //

      // Unique name in the context of this story
      name: 'button',

      // The label shown at the top of this story
      label: 'Button',

      // Path to the story preview template relative to 'view' folder without module name
      // By convention everything which is story related has .njk extension so that
      // it is easily distinguished from the production templates.
      template: 'atoms/buttons/stories/button.njk',

      // State of the component - could be inprogress, inreview or complete.
      // The states are indicated in the story navigation, list and preview UI views.
      state: 'complete',

      // Enable details view for this story (top action bar trigger showing
      // dialog with description and parameter documentation).
      // Default is auto-detect if sources are available.
      // details: true,

      // Used to describe macro/include parameters if available and required to build
      // relationship documentation (milestone)
      sources: [
        {
          // Still not 100% clear idea but the plan so far is:
          // `macro` for macros, `fragment` for A3 fragments, `include` for
          // generic nunjucks includes
          type: 'macro',
          // Unique name in the context of this source
          // In case of macro/fragment it's the name of the macro
          // function called (think macroImported.someName) and
          // being documented in this source item. The end goal is to
          // automatically extract it from the template source in the future.
          name: 'button',
          // Location of the macro/fragment used - the one which is the actual component
          // we use in production
          path: 'ui:atoms/buttons/macro.html',
          // Parameters expected from the current macro function, which should become
          // a documentation (milestone). The end goal is we parse
          // macro doc-comments (in specific yet to be invented `nunjucks-doc` format)
          // and auto-generate that schema.
          params: require('./schema/button')
        },
        {
          type: 'macro',
          name: 'btnOutlined',
          path: 'ui:atoms/buttons/macro.html',
          params: require('./schema/button')
        },
        {
          type: 'macro',
          name: 'btnRaised',
          path: 'ui:atoms/buttons/macro.html',
          params: require('./schema/button')
        },
        {
          type: 'macro',
          name: 'btnUnelevated',
          path: 'ui:atoms/buttons/macro.html',
          params: require('./schema/button')
        }
      ]
    },
    {
      //
      // The most simple usage, minimal meta data provided
      //
      name: 'fab',
      label: 'Floating Button',
      template: 'atoms/buttons/stories/fab.njk',
      state: 'inreview'
    },
    {
      name: 'icon-button',
      label: 'Icon Button',
      template: 'atoms/buttons/stories/icon-button.njk',
      state: 'inprogress'
    }
  ]
};
