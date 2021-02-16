module.exports = {
  label: {
    type: 'string',
    label: 'Button label'
  },
  options: {
    type: 'object',
    label: 'Options',
    schema: {
      type: {
        type: 'string',
        help: 'One of `outlined` | `raised` | `unelevated`. See [btnOutlined](#macro-btnOutlined) ' +
          'for shorter usage'
      },
      unbounded: {
        type: 'boolean',
        help: 'set ripple unbounded (such as checkboxes and radiobuttons)'
      }
    }
  }
};
