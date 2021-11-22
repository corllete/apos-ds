module.exports = {
  label: {
    type: 'string',
    label: 'Component label'
  },
  options: {
    type: 'object',
    label: 'Options',
    schema: {
      opt1: {
        type: 'string',
        help: 'One of `val1` | `val2` | `val3`'
      },
      opt2: {
        type: 'boolean',
        help: 'set some boolean option'
      }
    }
  }
};
