const isProd = process.env.NODE_ENV === 'production';

module.exports = function (self, env) {
  // DS custom tags
  function DsCommonTags() {
    this.tags = [
      'dscode',
      'dscodecell',
      'dsgrid',
      'dssection',
      'dscell',
      'dsrow',
      'dshint',
      'dshintcell'
    ];

    this.parse = function parse(parser, nodes) {
      const token = parser.nextToken(); // Get the tag token

      // Parse the args and move after the block end.
      const args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(token.value);

      // Parse the body
      const body = parser.parseUntilBlocks('end' + token.value);
      parser.advanceAfterBlockEnd();

      switch (token.value) {
        case 'dscode':
          return new nodes.CallExtension(this, 'runCode', args, [ body ]);

        case 'dscodecell':
          return new nodes.CallExtension(this, 'runCodeCell', args, [ body ]);

        case 'dsgrid':
          return new nodes.CallExtension(this, 'runGrid', args, [ body ]);

        case 'dssection':
          return new nodes.CallExtension(this, 'runGridSection', args, [ body ]);

        case 'dscell':
          return new nodes.CallExtension(this, 'runCell', args, [ body ]);

        case 'dsrow':
          return new nodes.CallExtension(this, 'runRow', args, [ body ]);

        case 'dshint':
          return new nodes.CallExtension(this, 'runHint', args, [ body ]);

        case 'dshintcell':
          return new nodes.CallExtension(this, 'runHintCell', args, [ body ]);
      }
    };

    this.parseArgs = function parseArgs(args, defaults = []) {
      const all = [ ...args ];
      const bodyFn = all.find(arg => typeof arg === 'function');
      const body = bodyFn ? bodyFn() : '';
      const rest = all.filter(arg => typeof arg !== 'function');

      return [
        ...rest.map((arg, i) => (typeof arg !== 'undefined' ? arg : defaults[i])),
        body
      ];
    };

    this.createCode = function createCode(lng, code, hasToggle = true, expanded = false) {
      lng = lng.toLowerCase() === 'njk' ? 'twig' : lng.toLowerCase();
      code = code
        .trimEnd()
        .replace(/^\s*\n+/, '')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;');

      // try to cut out column whitespace indentation of the code block
      const wsmatch = code.replace(/^\s*$/gm, '').match(/^\s+/);
      if (wsmatch) {
        code = code.replace(new RegExp(`^[ \r]{${wsmatch[0].length}}`, 'gm'), '');
      }

      const icon = expanded ? 'expand_less' : 'expand_more';
      const toggleStart = hasToggle
        ? `
        <div class="ds-toggle">
          <a class="ds-toggle__trigger" href="#" title="Toggle code">Toggle code <span class="ds-toggle__icon material-icons">${icon}</span></a>
          <div class="ds-toggle__content" style="display: ${expanded ? 'block' : 'none'};">
      `
        : '';
      const toggleEnd = hasToggle
        ? `
          </div>
        </div>
      `
        : '';

      return `
      ${toggleStart}
        <div class="ds-source-code">
          <pre><code class="ds-source-code__container${lng ? ' language-' + lng : ''}">${code}</code></pre>
        </div>
      ${toggleEnd}
      `;
    };

    /**
     * Usage (language is optional):
     * {% dscode 'njk' %}
     *   ...code
     * {% enddscode %}
     */
    this.runCode = function runCode(context, language, options, body) {
      const [ lng, opts, code ] = this.parseArgs([ language, options, body ], [ '', {} ]);
      const html = this.createCode(lng + '', code + '', opts.toggle, opts.expanded);
      return self.apos.template.safe(html);
    };

    /**
     * Usage (language and span are optional):
     * {% dscodecell 4, 'njk' %}
     *   ...code
     * {% enddscodecell %}
     */
    this.runCodeCell = function runCodeCell(context, span, language, options, body) {
      const [ s, lng, opts, code ] = this.parseArgs([ span, language, options, body ], [ 6, '', {} ]);

      const tag = this.createCode(lng + '', code, opts.toggle, opts.expanded);
      const html = this.createCell(s, tag, opts);

      return self.apos.template.safe(html);
    };

    this.createCell = function createCell(span, content, options = {}) {
      const spancls = span ? ' ds-grid__cell--span-' + span : '';
      const cls = options.cls ? ' ' + options.cls : '';
      return `
        <div class="ds-grid__cell${spancls}${cls}">
          ${content}
        </div>
      `;
    };

    this.createGrid = function createGrid(content, options = {}) {
      let html = '';
      const cls = options.cls ? ' ' + options.cls : '';
      const innerCls = options.innerCls ? ' ' + options.innerCls : '';

      if (!options.nested) {
        html += `
          <div class="ds-grid${cls}">
        `;
      }

      html += `\r<div class="ds-grid__inner${innerCls}">\n\r`;
      if (options.heading) {
        html += this.createCell(12, `<h3>${options.heading}</h3>`);
      }
      html += content;
      html += '\r</div>';

      if (!options.nested) {
        html += `
          </div>
        `;
      }
      return html;
    };

    /**
     * Usage (options are optional):
     * {% dsgrid { heading: 'A heading', cls: 'some class list', innerCls: 'inner class list', nested: false } %}
     *   ...cells
     * {% enddsgrid %}
     */
    this.runGrid = function runGrid(context, options, body) {
      const [ opts, content ] = this.parseArgs([ options, body ], [ {} ]);
      const html = this.createGrid(content, opts);
      return self.apos.template.safe(html);
    };

    /**
     * Usage (options are optional):
     * {% dssection 'A heading', { cls: 'some class list', innerCls: 'inner class list', nested: false } %}
     *   ...cells
     * {% enddssection %}
     */
    this.runGridSection = function runGrid(context, heading, options, body) {
      const [ h, opts, content ] = this.parseArgs([ heading, options, body ], [ null, {} ]);
      const grid = this.createGrid(content, {
        ...opts,
        heading: h
      });
      const html = `<section class="ds-story__section">${grid}</section>`;
      return self.apos.template.safe(html);
    };

    /**
     * Usage (span and options are optional):
     * {% dscell 4, { cls: 'some class list' } %}
     *   ...content
     * {% enddscell %}
     */
    this.runCell = function runCell(context, span, options, body) {
      const [ s, opts, content ] = this.parseArgs([ span, options, body ], [ null, {} ]);
      const html = this.createCell(s, content, opts);
      return self.apos.template.safe(html);
    };

    /**
     * Full row content - all devices
     * Usage (options are optional):
     * {% dsrow { cls: 'some class list' } %}
     *   ...content
     * {% enddsrow %}
     */
    this.runRow = function runRow(context, options, body) {
      const [ opts, content ] = this.parseArgs([ options, body ], [ {} ]);
      const html = this.createCell(12, content, opts);
      return self.apos.template.safe(html);
    };

    this.createHint = function createHint(type, content, opts = {}) {
      const cls = opts.cls ? ` ${opts.cls}` : '';
      return `
        <div class="ds-hint ds-hint--${type || 'default'}${cls}">
          <p class="ds-hint__content ds-typography--code">${content}</p>
        </div>
      `;
    };

    /**
     * Full row content - all devices
     * Usage (type is optional):
     * {% dshint 'default|ok|neutral|warning' %}
     *   ...hint content
     * {% enddshint %}
     */
    this.runHint = function runHint(context, type, options, body) {
      const [ t, opts, content ] = this.parseArgs([ type, options, body ], [ '', {} ]);
      const html = this.createHint(t, content, opts);
      return self.apos.template.safe(html);
    };

    /**
     * Full row content - all devices
     * Usage (type and span are optional):
     * {% dshintcell 4, 'default|ok|neutral|warning' %}
     *   ...hint content
     * {% enddshintcell %}
     */
    this.runHintCell = function runHintCell(context, span, type, options, body) {
      const [ s, t, opts, content ] = this.parseArgs(
        [ span, type, options, body ],
        [ 4, 'default', {} ]
      );
      const hint = this.createHint(t, content);
      const html = this.createCell(s, hint, opts);
      return self.apos.template.safe(html);
    };
  }

  // our filters
  const filters = {
    debug(data) {
      if (isProd) {
        return '';
      }
      const formatted = JSON.stringify(data, null, 2);
      return self.apos.template.safe(`<pre><code>${formatted}</code></pre>`);
    }
  };

  // our globals
  const globals = {
    // TODO Quick fix till __ns arrives back
    __ns(...args) {
      if (args.length > 1) {
        return args[1];
      }

      return args[0];
    }
  };

  // Register module extension
  // in v2:
  // const env = self.apos.templates.getEnv(self);
  env.addExtension('DsCommonTags', new DsCommonTags());

  // Register filters
  Object.keys(filters).forEach((name) => {
    env.addFilter(name, filters[name]);
  });

  // Register globals
  Object.keys(globals).forEach((name) => {
    env.addGlobal(name, globals[name]);
  });

  return {
    DsCommonTags,
    filters,
    globals
  };
};
