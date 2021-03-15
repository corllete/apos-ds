module.exports = {
  name: 'testConfigId',
  label: 'Test Config',
  category: 'Atoms :: Test',
  data: '{rootDir}/data.json',
  stories: [
    {
      name: 'story1',
      label: 'Story 1',
      template: 'atoms/test/story1.njk',
      state: 'complete'
    },
    {
      name: 'story2',
      label: 'story2',
      template: 'atoms/test/story2.njk',
      state: 'inreview'
    },
    {
      name: 'story3',
      label: 'story3',
      template: 'atoms/test/story3.njk',
      state: 'inprogress',
      data: {
        inlineKey: 'inlineValue'
      }
    },
    {
      name: 'storyFull',
      label: 'Story Full',
      template: 'atoms/test/story.full.njk',
      state: 'inprogress',
      data: 'data.json',
      sources: [
        {
          type: 'macro',
          name: 'fn',
          path: 'module2:atoms/test/macro.html',
          params: require('./sample.schema')
        },
        {
          type: 'fragment',
          name: 'fn',
          path: 'module2:atoms/test/macro.html'
        },
        {
          type: 'include',
          name: 'includePreviewName',
          path: 'module1:includes/component.html'
        }
      ]
    }
  ]
};
