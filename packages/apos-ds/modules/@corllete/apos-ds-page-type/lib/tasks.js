const fs = require('fs-extra');

module.exports = function (self, options) {
  return {
    'publish-assets': {
      usage: 'Copy to public folder or publish to CDN all built module assets',
      afterModuleInit: true,
      // Webpack should have been invoked and we assume all assets are built
      async task(argv) {
        if (!self.apos.ds.options.enabled) {
          self.apos.util.warn('Bundle disabled, nothing to do.');
          return;
        }
        let uiPath = `${self.apos.rootDir}/node_modules/@corllete/apos-ds/modules/@corllete/apos-ds-page-type/ui`;
        const publishPath = `${self.apos.rootDir}/public/apos-ds`;
        const dist = '/dist';
        try {
          fs.unlinkSync(publishPath);
        } catch (e) {
          //
        }
        require('remove').removeSync(publishPath, { ignoreErrors: true });
        if (process.env.NODE_ENV === 'production') {
          uiPath += dist;
          fs.mkdirSync(publishPath);
          fs.mkdirSync(publishPath + '/js');
          fs.mkdirSync(publishPath + '/css');
          fs.writeFileSync(
            publishPath + '/js/bundle.js',
            fs.readFileSync(uiPath + '/js/bundle.js')
          );
          fs.writeFileSync(
            publishPath + '/js/preview.js',
            fs.readFileSync(uiPath + '/js/preview.js')
          );
          fs.writeFileSync(
            publishPath + '/js/highlight.common.min.js',
            fs.readFileSync(uiPath + '/js/highlight.common.min.js')
          );
          fs.writeFileSync(
            publishPath + '/css/bundle.css',
            fs.readFileSync(uiPath + '/css/bundle.css')
          );
          fs.writeFileSync(
            publishPath + '/css/preview.css',
            fs.readFileSync(uiPath + '/css/preview.css')
          );
          await deploy();
        } else {
          // Just symlink it
          fs.symlinkSync(uiPath, publishPath);
        }

        // shamelessly stolen from @apostrophe/assets/index.js build task
        async function deploy() {
          if (process.env.NODE_ENV !== 'production') {
            return;
          }
          const copyIn = require('util').promisify(self.apos.attachment.uploadfs.copyIn);
          const releaseId = self.apos.asset.getReleaseId();
          const localFolder = `${self.apos.rootDir}/public/apos-ds`;
          const uploadfsFolder = `/assets/${releaseId}/apos-ds`;
          await copyIn(`${localFolder}/js/bundle.js`, `${uploadfsFolder}/js/bundle.js`);
          await copyIn(`${localFolder}/js/preview.js`, `${uploadfsFolder}/js/preview.js`);
          await copyIn(`${localFolder}/js/highlight.common.min.js`, `${uploadfsFolder}/js/highlight.common.min.js.js`);
          await copyIn(`${localFolder}/css/bundle.css`, `${uploadfsFolder}/css/bundle.css`);
          await copyIn(`${localFolder}/css/preview.css`, `${uploadfsFolder}/css/preview.css`);
          self.apos.util.log('Published:');
          self.apos.util.log(self.stylesheetHelper('bundle', true));
          self.apos.util.log(self.stylesheetHelper('preview', true));
          self.apos.util.log(self.scriptHelper('bundle', true));
          self.apos.util.log(self.scriptHelper('preview', true));
        }
      }
    }
  };
};
