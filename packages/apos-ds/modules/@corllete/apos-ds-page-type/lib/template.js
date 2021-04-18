const isProd = process.env.NODE_ENV === 'production';

// `self` here should be the apos.template context
module.exports = function (self, env) {
  // our filters
  const filters = {
    debug(data) {
      if (isProd) {
        return '';
      }
      const formatted = JSON.stringify(data, null, 2);
      return self.apos.template.safe(`<pre><code>${formatted}</code></pre>`);
    }
  };

  // our globals
  const globals = {
    // TODO Quick fix till __ns arrives back
    __ns(...args) {
      if (args.length > 1) {
        return args[1];
      }

      return args[0];
    }
  };

  // Register module extension
  // in v2:
  // const env = self.apos.templates.getEnv(self);
  // Extensions moved to apos core custom tag definition
  // env.addExtension('DsCommonTags', new Tags());

  // Register filters
  Object.keys(filters).forEach((name) => {
    env.addFilter(name, filters[name]);
  });

  // Register globals
  Object.keys(globals).forEach((name) => {
    env.addGlobal(name, globals[name]);
  });

  // Export for testing
  return {
    filters,
    globals
  };
};
