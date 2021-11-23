// This configures the @apostrophecms/templates module to add our custom nunjucks environment
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
  }
};
