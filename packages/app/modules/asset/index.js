const mode = process.env.NODE_ENV;

module.exports = {
  handlers(self, options) {
    return {
      '@apostrophecms/page:beforeSend': {
        // See views/layout.html, blocks extraHead, extraBody
        webpack(req) {
          req.data.isDev = (mode !== 'production');
        }
      }
    };
  }
};
