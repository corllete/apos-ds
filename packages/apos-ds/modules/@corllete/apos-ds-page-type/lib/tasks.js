const fs = require('fs-extra');
const path = require('path');

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
        let uiPath = path.join(self.apos.rootDir, '/node_modules/@corllete/apos-ds/modules/@corllete/apos-ds-page-type/ui');
        const publishPath = path.join(self.apos.rootDir, '/public/apos-ds');
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
          fs.mkdirSync(path.join(publishPath, '/js'));
          fs.mkdirSync(path.join(publishPath, '/css'));
          fs.writeFileSync(
            path.join(publishPath, '/js/bundle.js'),
            fs.readFileSync(path.join(uiPath, '/js/bundle.js'))
          );
          fs.writeFileSync(
            path.join(publishPath, '/js/preview.js'),
            fs.readFileSync(path.join(uiPath, '/js/preview.js'))
          );
          fs.writeFileSync(
            path.join(publishPath, '/js/highlight.common.min.js'),
            fs.readFileSync(path.join(uiPath, '/js/highlight.common.min.js'))
          );
          fs.writeFileSync(
            path.join(publishPath, '/css/bundle.css'),
            fs.readFileSync(path.join(uiPath, '/css/bundle.css'))
          );
          fs.writeFileSync(
            path.join(publishPath, '/css/preview.css'),
            fs.readFileSync(path.join(uiPath + '/css/preview.css'))
          );
          await deploy();
        } else {
          // when installed as npm module only ui/dist is available
          // so basic exist test for ui/js folder should be fine without breaking
          // the module development
          if (!fs.existsSync(path.join(uiPath, '/js'))) {
            uiPath = path.join(uiPath, dist);
          }
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
          const localFolder = path.join(self.apos.rootDir, '/public/apos-ds');
          const uploadfsFolder = path.join('/assets', `/${releaseId}`, '/apos-ds');
          await copyIn(path.join(localFolder, '/js/bundle.js'), path.join(uploadfsFolder, '/js/bundle.js'));
          await copyIn(path.join(localFolder, '/js/preview.js'), path.join(uploadfsFolder, '/js/preview.js'));
          await copyIn(path.join(localFolder, '/js/highlight.common.min.js'), path.join(uploadfsFolder, '/js/highlight.common.min.js.js'));
          await copyIn(path.join(localFolder, '/css/bundle.css'), path.join(uploadfsFolder, '/css/bundle.css'));
          await copyIn(path.join(localFolder, '/css/preview.css'), path.join(uploadfsFolder, '/css/preview.css'));
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
