// This configures the @apostrophecms/templates module to add our custom nunjucks environment
module.exports = {
  improve: '@apostrophecms/template',
  extendMethods(self, options) {
    return {
      newEnv(_super, req, name, folders) {
        const env = _super(req, name, folders);
        // Enhance nunjucks env
        require('../apos-ds-page-type/lib/template.js')(self, env);
        return env;
      }
    };
  }
};
