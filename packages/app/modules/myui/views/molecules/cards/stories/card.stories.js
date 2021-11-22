module.exports = {
  name: 'molecules-cards',
  label: 'Cards',
  category: 'molecules :: Cards',
  stories: [
    {
      name: 'card',
      label: 'Defalt Card',
      template: 'molecules/cards/stories/card.njk',
      data: 'mock.json',
      state: 'inreview',
      details: true,
      meta: true
    }
  ]
};
