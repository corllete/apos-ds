// This configures the @apostrophecms/templates module to add our custom nunjucks environment
const util = require('util');
module.exports = {
  improve: '@apostrophecms/template',

  extendMethods(self) {
    return {
      newEnv(_super, req, name, folders) {
        const env = _super(req, name, folders);

        // Enhance nunjucks env
        const moduleSelf = self.apos.modules['@corllete/apos-ds-page-type'];
        require('../apos-ds-page-type/lib/template.js')(moduleSelf, env);

        return env;
      }
    };
  },

  methods(self) {
    return {
      // A missing core function - pass the data as global context to the template
      renderString(req, s, data, module) {
        const env = self.getEnv(req, module);
        const coreArgs = self.getRenderArgs(req, data, module);
        const exclude = [
          'data',
          'apos',
          '__',
          '__t',
          '__req',
          'getOptions'
        ];
        const args = {
          ...Object.keys(coreArgs).reduce((obj, key) => {
            if (!exclude.includes(key)) {
              return {
                ...obj,
                [key]: coreArgs[key]
              };
            }
            return obj;
          }, {}),
          ...data
        };

        return util.promisify(function (s, args, callback) {
          return env.renderString(s, args, callback);
        })(s, args);
      }
    };
  }
};
