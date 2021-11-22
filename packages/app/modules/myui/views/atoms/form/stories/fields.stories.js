module.exports = {
  // Globaly unique!
  name: 'atoms-form',
  label: 'Fields',
  category: 'atoms :: Form',
  stories: [
    {
      name: 'text',
      label: 'Text',
      template: 'atoms/form/stories/text.njk',
      state: 'inreview',
      details: true
    },
    {
      name: 'area',
      label: 'Area',
      template: 'atoms/form/stories/area.njk',
      state: 'inreview',
      details: true
    }
  ]
};
