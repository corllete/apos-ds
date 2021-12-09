module.exports = {
  name: 'molecules-cards',
  label: 'Cards',
  category: 'molecules :: Cards',
  data: 'demo.json',
  stories: [
    {
      name: 'card',
      label: 'Defalt Card',
      template: 'molecules/cards/stories/card.njk',
      data: 'cards.json',
      state: 'inreview',
      details: true,
      meta: true
    }
  ]
};
