const util = require('util');

class Tags {
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
    parser.advanceAfterBlockEnd();

    return {
      args,
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

  _createCode = (lng, code, hasToggle = true, expanded = false) => {
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
  }

  /**
   * Usage (language is optional):
   * {% dscode 'njk' %}
   *   ...code
   * {% enddscode %}
   */
  runCode = async (context, ...args) => {
    const [ language, options, body ] = await this._parseArgs(args, [ '', {} ]);
    return this._createCode(language + '', body + '', options.toggle, options.expanded);
  }

  /**
   * Usage (language and span are optional):
   * {% dscodecell 4, 'njk' %}
   *   ...code
   * {% enddscodecell %}
   */
  runCodeCell = async (context, ...args) => {
    const [ span, language, options, body ] = await this._parseArgs(args, [ 6, '', {} ]);

    const tag = this._createCode(language + '', body, options.toggle, options.expanded);
    return this._createCell(span, tag, options);
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
  const handler = new Tags();
  return {
    dscode: {
      parse: handler.parse,
      run: handler.runCode
    },
    dscodecell: {
      parse: handler.parse,
      run: handler.runCodeCell
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
