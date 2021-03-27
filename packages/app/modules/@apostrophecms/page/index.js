// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: '@corllete/apos-ds-page-type',
        label: 'Design System'
      }
    ],
    park: [
      {
        slug: '/design-system',
        parkedId: 'design-system',
        _defaults: {
          slug: '/design-system',
          parkedId: 'design-system',
          title: 'Design System',
          type: '@corllete/apos-ds-page-type'
        }
      }
    ]
  }
};
