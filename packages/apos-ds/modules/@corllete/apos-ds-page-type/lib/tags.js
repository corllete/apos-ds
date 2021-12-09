const util = require('util');

class Tags {

  constructor(self) {
    this.self = self;
  }

  /**
   * The default parser.
   * It parses arguments and single body, has closing tag
   */
  parse = (parser, nodes) => {
    const token = parser.nextToken(); // Get the tag token

    // Parse the args and move after the block end.
    const args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(token.value);

    // Parse the body
    const body = parser.parseUntilBlocks('end' + token.value);

    // A hack to detect the column start
    // https://github.com/zephraph/nunjucks-markdown/blob/master/lib/markdown_tag.js#L22
    // const tabStart = new nodes.NodeList(0, 0, [ new nodes.Output(0, 0, [ new nodes.TemplateData(0, 0, (token.colno - 1)) ]) ]);
    parser.advanceAfterBlockEnd();

    return {
      args,
      blocks: [ body ]
    };
  }

  /**
   * A parser that keeps the body raw (no parsing) and parses arguments - useful for e.g. code blocks
   */
  parseArgsRawBody = (parser, nodes, lexer) => {
    const start = parser.tokens.index;

    const token = parser.nextToken(); // Get the tag token
    const args = parser.parseSignature(null, true); // parse the arguments, allow KWArguments

    // REWIND and cheat rawBody so that parser.advanceAfterBlockEnd() doesn't crash
    const current = parser.tokens.index;
    parser.tokens.backN(current - start);
    while (parser.tokens.current() !== '{') {
      parser.tokens.back();
    }
    parser.peeked = null;
    let peek;
    while ((peek = parser.peekToken())) {
      if (peek.type === lexer.TOKEN_BLOCK_END) {
        break;
      }
      parser.nextToken();
    }
    parser.tokens.backN(2);
    parser.peeked = token;
    parser.tokens.in_code = true;
    // END REWIND

    const body = parser.parseRaw(token.value);

    return {
      args,
      blocks: [ body ]
    };
  }

  /**
   * A parser that keeps the body raw (no parsing) and doesn't parse arguments - useful for e.g. code blocks
   */
  parseRawBody = (parser, nodes, lexer) => {
    // This is the easy way, in case we don't have arguments...
    const token = parser.peekToken();
    const body = parser.parseRaw(token.value);
    // Done!

    return {
      args: null,
      blocks: [ body ]
    };
  }

  /**
   * The parser without closing tag.
   * It parses arguments only
   */
  parseSingle = (parser, nodes) => {
    const token = parser.nextToken(); // Get the tag token

    // Parse the args and move after the block end.
    const args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(token.value);

    return { args };
  }

  /**
   * Parse arguments and single body if available
   * Retursn array of options, filled with defaults if missing in arguments.
   */
  _parseArgs = async (all, defaults = []) => {
    const args = [ ...all ];
    let body = null;

    // Grab the body function if available
    const bodyFn = args.pop();
    // And await other async blocks
    if (typeof bodyFn === 'function') {
      body = await util.promisify(bodyFn)();
    } else if (typeof bodyFn !== 'undefined') {
      // it's a tag without body, revert it as it's an argument
      args.push(bodyFn);
    }

    return [
      ...defaults.map((val, i) => (typeof args[i] !== 'undefined' ? args[i] : val)),
      body
    ];

  }

  _createCode = async (context, lng, code, {
    label, parse = false, toggle = true, expanded = false
  }) => {
    lng = lng.toLowerCase() === 'njk' ? 'twig' : lng.toLowerCase();
    if (!label) {
      label = 'Code';
    }
    // An idea about handling empty spaces
    // https://github.com/zephraph/nunjucks-markdown/blob/master/lib/markdown_tag.js#L46

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

    // NEW eval feature - only if not in legacy mode
    if (!this.self.options.legacyCodeBlocks && parse) {
      const req = context.ctx.__req;
      code = await this.self.apos.template.renderString(req, code, context.ctx, this.self);
    }

    const icon = expanded ? 'expand_less' : 'expand_more';
    const toggleStart = toggle
      ? `
        <div class="ds-toggle">
          <a class="ds-toggle__trigger" href="#" title="${label}">${label} <span class="ds-toggle__icon material-icons">${icon}</span></a>
          <div class="ds-toggle__content" style="display: ${expanded ? 'block' : 'none'};">
      `
      : '';
    const toggleEnd = toggle
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
  }

  /**
   * Usage (language is optional):
   * {% dscode 'njk' %}
   *   ...code
   * {% enddscode %}
   */
  runCode = async (context, ...args) => {
    const [ language, options, body ] = await this._parseArgs(args, [ '', {} ]);
    return this._createCode(context, language + '', body + '', options);
  }

  /**
   * Usage (language and span are optional):
   * {% dscodecell 4, 'njk' %}
   *   ...code
   * {% enddscodecell %}
   */
  runCodeCell = async (context, ...args) => {
    const [ span, language, options, body ] = await this._parseArgs(args, [ 6, '', {} ]);

    const tag = await this._createCode(context, language + '', body, options);
    return this._createCell(span, tag, options);
  }

  _createMarkdown = (src) => {
    let source = src
      .trimEnd()
      .replace(/^\s*\n+/, '');

    // try to cut out column whitespace indentation of the code block
    const wsmatch = source.replace(/^\s*$/gm, '').match(/^\s+/);
    if (wsmatch) {
      source = source.replace(new RegExp(`^[ \r]{${wsmatch[0].length}}`, 'gm'), '');
    }

    return `
      <div class="ds-markdown">
        ${this.self.md.render(source)}
      </div>
    `;
  }

  /**
   * Usage:
   * {% dsmd 'njk' %}
   *   ...code
   * {% enddsmd %}
   */
  runMarkdown = async (context, ...args) => {
    const [ body ] = await this._parseArgs(args, []);
    const res = this._createMarkdown((body + '').replace(/```njk/gm, '```twig'));
    return this.self.apos.template.safe(res);
  }

  _createCell = (span, content, options = {}) => {
    const spancls = span ? ' ds-grid__cell--span-' + span : '';
    const cls = options.cls ? ' ' + options.cls : '';
    return `
        <div class="ds-grid__cell${spancls}${cls}">
          ${content}
        </div>
      `;
  }

  _createGrid = (content, options = {}) => {
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
      html += this._createCell(12, `<h3>${options.heading}</h3>`);
    }
    html += content;
    html += '\r</div>';

    if (!options.nested) {
      html += `
          </div>
        `;
    }
    return html;
  }

  /**
   * Usage (options are optional):
   * {% dsgrid { heading: 'A heading', cls: 'some class list', innerCls: 'inner class list', nested: false } %}
   *   ...cells
   * {% enddsgrid %}
   */
  runGrid = async (context, ...args) => {
    const [ options, body ] = await this._parseArgs(args, [ {} ]);
    return this._createGrid(body, options);
  }

  /**
   * Usage (options are optional):
   * {% dssection 'A heading', { cls: 'some class list', innerCls: 'inner class list', nested: false } %}
   *   ...cells
   * {% enddssection %}
   */
  runGridSection = async (context, ...args) => {
    const [ heading, options, body ] = await this._parseArgs(args, [ null, {} ]);
    const grid = this._createGrid(body, {
      ...options,
      heading
    });
    return `<section class="ds-story__section">${grid}</section>`;
  }

  /**
   * Usage (span and options are optional):
   * {% dscell 4, { cls: 'some class list' } %}
   *   ...content
   * {% enddscell %}
   */
  runCell = async (context, ...args) => {
    const [ span, options, body ] = await this._parseArgs(args, [ null, {} ]);
    return this._createCell(span, body, options);
  }

  /**
   * Full row content - all devices
   * Usage (options are optional):
   * {% dsrow { cls: 'some class list' } %}
   *   ...content
   * {% enddsrow %}
   */
  runRow = async (context, ...args) => {
    const [ options, body ] = await this._parseArgs(args, [ {} ]);
    return this._createCell(12, body, options);
  }

  _createHint = (type, content, opts = {}) => {
    const cls = opts.cls ? ` ${opts.cls}` : '';
    return `
        <div class="ds-hint ds-hint--${type || 'default'}${cls}">
          <p class="ds-hint__content ds-typography--code">${content}</p>
        </div>
      `;
  }

  /**
   * Full row content - all devices
   * Usage (type is optional):
   * {% dshint 'default|ok|neutral|warning' %}
   *   ...hint content
   * {% enddshint %}
   */
  runHint = async (context, ...args) => {
    const [ type, options, body ] = await this._parseArgs(args, [ '', {} ]);
    return this._createHint(type, body, options);
  }

  /**
   * Full row content - all devices
   * Usage (type and span are optional):
   * {% dshintcell 4, 'default|ok|neutral|warning' %}
   *   ...hint content
   * {% enddshintcell %}
   */
  runHintCell = async (context, ...args) => {
    const [ span, type, options, body ] = await this._parseArgs(
      args,
      [ 4, 'default', {} ]
    );
    const hint = this._createHint(type, body);
    return this._createCell(span, hint, options);
  }
}

module.exports = function (self) {
  const handler = new Tags(self);
  return {
    dscode: {
      parse: self.options.legacyCodeBlocks ? handler.parse : handler.parseArgsRawBody,
      run: handler.runCode
    },
    dscodecell: {
      parse: self.options.legacyCodeBlocks ? handler.parse : handler.parseArgsRawBody,
      run: handler.runCodeCell
    },
    dsmd: {
      parse: handler.parse,
      run: handler.runMarkdown
    },
    dsgrid: {
      parse: handler.parse,
      run: handler.runGrid
    },
    dssection: {
      parse: handler.parse,
      run: handler.runGridSection
    },
    dscell: {
      parse: handler.parse,
      run: handler.runCell
    },
    dsrow: {
      parse: handler.parse,
      run: handler.runRow
    },
    dshint: {
      parse: handler.parse,
      run: handler.runHint
    },
    dshintcell: {
      parse: handler.parse,
      run: handler.runHintCell
    }
  };
};
