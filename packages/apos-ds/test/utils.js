const chai = require('chai');
const expect = chai.expect;

const cssName = (name) => name.toLocaleLowerCase();
const aposUtil = {
  cssName,
  warnDevOnce: chai.spy()
};

const aposMock = {
  rootDir: './test/mocks',
  util: aposUtil

};

const { options, categories } = require('../index');

const moduleSelf = {
  sources: [],
  paths: [],
  config: {},
  storyIndex: {},
  categories: {},
  apos: aposMock
};

exports.expect = expect;
exports.chai = chai;
exports.self = moduleSelf;
exports.getSelf = () => ({ ...moduleSelf });
exports.options = options;
exports.getOptions = () => ({ ...options });
exports.getCategories = () => ({ ...categories.add });
