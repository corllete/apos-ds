const path = require('path');
const fs = require('fs-extra');
const util = require('util');

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

        await deploy();
        printResult();

        async function removeSymlink(p) {
          try {
            await fs.unlink(p);
          } catch (e) {
            //
          }
        }

        function printResult() {
          const pre = `[${self.__meta.name}]`;
          self.apos.util.log(pre, `Published (${self.isProduction ? 'production' : 'dev'}):`);
          self.apos.util.log(pre, self.stylesheetHelper('bundle', true));
          self.apos.util.log(pre, self.stylesheetHelper('preview', true));
          self.apos.util.log(pre, self.scriptHelper('bundle', true));
          self.apos.util.log(pre, self.scriptHelper('preview', true));
        }

        // shamelessly stolen (but heavily modified) from @apostrophe/assets/index.js build task
        async function deploy() {
          if (!self.isProduction) {
            // Just symlink it
            const uiPath = self.getBaseAssetLocalPath(true, true);
            const publicFolder = self.getBaseAssetReleasePath(false, true);

            await removeSymlink(publicFolder);
            await fs.remove(publicFolder);

            await fs.ensureSymlink(uiPath, publicFolder);
            return;
          }

          const localFolder = self.getBaseAssetLocalPath(true, true);
          let copyIn;
          const publicFolder = self.getBaseAssetReleasePath(false);

          if (self.hasRemoteAssets) {
            copyIn = util.promisify(self.apos.uploadfs.copyIn);
          } else {
            copyIn = fs.copy;
            await removeSymlink(publicFolder);
            await fs.remove(publicFolder);
            await fs.mkdirp(publicFolder);
          }

          const files = [
            '/js/bundle.js',
            '/js/preview.js',
            '/js/highlight.common.min.js',
            '/css/bundle.css',
            '/css/preview.css'
          ];

          for (const file of files) {
            await copyIn(path.join(localFolder, file), path.join(publicFolder, file));
          }
        }
      }
    }
  };
};
