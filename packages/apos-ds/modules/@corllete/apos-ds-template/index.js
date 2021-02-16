// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu
// FIXME move to the bundle https://github.com/apostrophecms/apostrophe/discussions/2694#discussioncomment-349719
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
