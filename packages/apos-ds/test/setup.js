const chai = require('chai');
const spies = require('chai-spies');
const { jestSnapshotPlugin } = require('mocha-chai-jest-snapshot');

chai.use(spies);
chai.use(jestSnapshotPlugin());
