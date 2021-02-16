/**
 * Generic convenient utilities, standalone or built on top of the A3 toolset.
 *
 * Depends on following Apostrophe context:
 * - apos.util.cssName - core module
 * - apos.util.warnDevOnce - console development warnings
 *
 * @param {Object} self Apostrophe 3 context
 */
module.exports = function (self) {
  const trim = (str) => str.trim();
  const css = (str) => self.apos.util.cssName(str);

  // dev warning helper
  const warnDevOnce = (message) => {
    self.apos.util.warnDevOnce(
      'apos-ds',
      '\n⚠️  ' + message
    );
  };

  return {
    trim,
    css,
    warnDevOnce
  };
};
