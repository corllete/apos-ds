const {
  expect,
  getSelf,
  getOptions,
  getCategories
} = require('./utils');
const handler = require('../lib/story');

// Help the Intelisense...
let opts = getOptions();
let self = getSelf();

describe('Resolve Stories', function() {
  beforeEach(() => {
    opts = getOptions();
    self = getSelf();
  });

  describe('Convert Modules options to Sources', function() {
    it('should initialize modules', () => {
      opts.docs = false;
      opts.modules = [ 'general' ];
      const { initModules } = handler(self, opts);
      initModules();

      expect(self.sources.length).to.equal(3, 'wrong sources count');

      const [ s1, s2, s3 ] = self.sources;
      expect(s1.module).to.equal('general');
      expect(s2.module).to.equal('general');

      expect(s1.path).to.equal('test/app/node_modules/general/views/**/*.stories.js');
      expect(s2.path).to.equal('test/node_modules/general/views/**/*.stories.js');
      expect(s3.path).to.equal('test/app/modules/general/views/**/*.stories.js');
    });

    it('should initialize with sources option', () => {
      opts.docs = false;
      opts.modules = [ 'general' ];
      opts.sources = [ {
        module: 'module3',
        paths: [
          'component1',
          'component2'
        ]
      } ];
      const { initModules } = handler(self, opts);
      initModules();

      expect(self.sources.length).to.equal(9, 'wrong sources count');

      const [ s1, s2, s3, s4, s5, s6, s7, s8, s9 ] = self.sources;
      expect(s1.module).to.equal('module3');
      expect(s2.module).to.equal('module3');
      expect(s3.module).to.equal('module3');
      expect(s4.module).to.equal('module3');
      expect(s5.module).to.equal('module3');
      expect(s6.module).to.equal('module3');
      expect(s7.module).to.equal('general');
      expect(s8.module).to.equal('general');
      expect(s9.module).to.equal('general');

      expect(s1.path).to.equal('test/app/node_modules/module3/views/component1/**/*.stories.js');
      expect(s2.path).to.equal('test/node_modules/module3/views/component1/**/*.stories.js');
      expect(s3.path).to.equal('test/app/modules/module3/views/component1/**/*.stories.js');
      expect(s4.path).to.equal('test/app/node_modules/module3/views/component2/**/*.stories.js');
      expect(s5.path).to.equal('test/node_modules/module3/views/component2/**/*.stories.js');
      expect(s6.path).to.equal('test/app/modules/module3/views/component2/**/*.stories.js');

      expect(s7.path).to.equal('test/app/node_modules/general/views/**/*.stories.js');
      expect(s8.path).to.equal('test/node_modules/general/views/**/*.stories.js');
      expect(s9.path).to.equal('test/app/modules/general/views/**/*.stories.js');
    });

    it('should initialize modules with docs by default', () => {
      opts.modules = [ 'general' ];
      const { initModules } = handler(self, opts);
      initModules();

      expect(self.sources.length).to.equal(5, 'wrong sources count');

      const [ , , , d1, d2 ] = self.sources;
      expect(d1.module).to.equal('@corllete/apos-ds-page-type');
      expect(d2.module).to.equal('@corllete/apos-ds-page-type');

      expect(d1.path).to.contain('node_modules/@corllete/apos-ds/modules/@corllete/apos-ds-page-type/views/**/*.stories.js');
      expect(d2.path).to.contain('modules/@corllete/apos-ds-page-type/views/**/*.stories.js');
    });

    it('should initialize modules with warning when no modules are found', () => {
      opts.docs = false;
      const { initModules } = handler(self, opts);
      initModules();

      expect(self.sources.length).to.equal(0, 'wrong sources count');
      expect(self.apos.util.warnDevOnce).to.have.been.called();
    });
  });

  describe('Initialize Categories', function () {
    it('should initialize from minimal category definitions from options', () => {
      const categories = {
        test: {
          label: 'Test'
        }
      };
      opts.docs = false;
      self.categories = categories;
      const { initCategories } = handler(self, opts);
      initCategories();

      expect(self.categories).toMatchSnapshot('Categories snapshot doesn\'t match');
    });

    it('should initialize the default category definition', () => {
      const categories = getCategories();
      self.categories = categories;
      const { initCategories } = handler(self, opts);
      initCategories();

      expect(self.categories).toMatchSnapshot('Categories snapshot doesn\'t match');
    });
  });

  describe('Initialize Config Paths from Module Sources', function () {
    it('should initialize config paths from sources', async () => {
      opts.docs = false;
      opts.modules = [ 'general' ];
      const { initModules, initStoryPaths } = handler(self, opts);
      initModules();
      await initStoryPaths();

      expect(self.paths.length).to.equal(1, 'wrong paths count');
      const [ configPath ] = self.paths;
      expect(configPath.module).to.equal('general');
      expect(configPath.path).to.equal('test/app/modules/general/views/findme.stories.js');
    });

    it('should initialize internal docs config paths last', async () => {
      opts.docs = true;
      opts.modules = [ 'general' ];
      const { initModules, initStoryPaths } = handler(self, opts);
      initModules();
      await initStoryPaths();

      expect(self.paths.length).to.be.greaterThan(1, 'wrong paths count');
      const [ , ...docPaths ] = self.paths;
      docPaths.forEach((p) => {
        expect(p.module).to.equal('@corllete/apos-ds-page-type');
      });
    });

    it('should merge and override config paths from npm and local sources', async () => {
      opts.docs = false;
      opts.modules = [ 'module1' ];
      const { initModules, initStoryPaths } = handler(self, opts);
      initModules();
      await initStoryPaths();

      expect(self.paths.length).to.equal(3, 'wrong paths count');
      const [ c1, c2, c3 ] = self.paths;
      expect(c1.module).to.equal('module1');
      expect(c1.path).to.equal('test/app/node_modules/module1/views/01.stories.js');
      expect(c2.module).to.equal('module1');
      expect(c2.path).to.equal('test/app/node_modules/module1/views/02.stories.js');
      expect(c3.module).to.equal('module1');
      expect(c3.path).to.equal('test/app/modules/module1/views/01.stories.js');
    });

  });

  describe('Gather Story metadata from  Config Paths', function () {
    it.only('should initialize stories from their configuration', async () => {
      opts.docs = false;
      opts.modules = [ 'module2' ];
      self.categories = getCategories();
      const {
        initModules,
        initCategories,
        initStoryPaths,
        buildConfig
      } = handler(self, opts);

      initModules();
      initCategories();
      await initStoryPaths();
      buildConfig();

      expect(self.sources).toMatchSnapshot('Sources doesn\'t match');
      expect(self.paths).toMatchSnapshot('Paths doesn\'t match');
      expect(self.config).toMatchSnapshot('Config doesn\'t match');
      expect(self.storyIndex).toMatchSnapshot('Story Index doesn\'t match');
      expect(self.categories).toMatchSnapshot('Categories doesn\'t match');
    });
  });
});
