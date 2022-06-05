const chai = require('chai');
const expect = chai.expect;

const cssName = (name) => name.toLocaleLowerCase();
const aposUtil = {
  cssName,
  warnDevOnce: chai.spy(),
  warn: chai.spy()
};

const aposMock = {
  rootDir: './test/app',
  npmRootDir: './test/app',
  util: aposUtil

};

const { options, categories } = require('../index');

exports.expect = expect;
exports.chai = chai;
exports.self = {
  sources: [],
  paths: [],
  config: {},
  storyIndex: {},
  categories: {},
  apos: aposMock
};
exports.getSelf = () => ({
  sources: [],
  paths: [],
  config: {},
  storyIndex: {},
  categories: {},
  apos: aposMock
});
exports.options = options;
exports.getOptions = () => ({ ...options });
exports.getCategories = () => ({ ...categories.add });
