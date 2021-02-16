module.exports = {
  // Globally unique name
  name: 'docs-tools',
  // We can explicitly set to what module this config belongs.
  // This will be later used for building relationships between your components
  module: '@corllete/apos-ds-page-type',
  label: 'Tools',
  // Those categories doesn't exist and will be auto-created
  category: 'ds-docs :: Tools',
  stories: [
    {
      // Unique name in the context of this story
      name: 'colors',
      label: 'Colors',
      template: 'docs/99-tools/colors.njk',
      state: 'complete'
    },
    {
      name: 'typography',
      label: 'Typography',
      template: 'docs/99-tools/types.njk',
      state: 'complete'
    },
    {
      name: 'hints',
      label: 'Hints',
      template: 'docs/99-tools/hints.njk',
      state: 'complete'
    }
  ]
};
