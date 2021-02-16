// Source: https://github.com/LeaVerou/contrast-ratio
// Simple class for handling sRGB colors
(function (NS) {
  var _ = NS.fn.Color = function (rgba) {
    if (rgba === 'transparent') {
      rgba = [ 0, 0, 0, 0 ];
    } else if (typeof rgba === 'string') {
      var rgbaString = rgba;
      rgba = rgbaString.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/);
      if (rgba) {
        rgba.shift();
      } else {
        throw new Error('Invalid string: ' + rgbaString);
      }
    }
    if (rgba[3] === undefined) {
      rgba[3] = 1;
    }
    rgba = rgba.map(a => +a);
    this.rgba = rgba;
  };

  _.prototype = {
    get rgb() {
      return this.rgba.slice(0, 3);
    },

    get alpha() {
      return this.rgba[3];
    },

    set alpha(alpha) {
      this.rgba[3] = alpha;
    },

    get luminance() {
      // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgba = this.rgba.slice();
      for (var i = 0; i < 3; i++) {
        var rgb = rgba[i];
        rgb /= 255;
        rgb = rgb < 0.03928 ? rgb / 12.92 : Math.pow((rgb + 0.055) / 1.055, 2.4);
        rgba[i] = rgb;
      }
      return 0.2126 * rgba[0] + 0.7152 * rgba[1] + 0.0722 * rgba[2];
    },

    get inverse() {
      return new _([
        255 - this.rgba[0],
        255 - this.rgba[1],
        255 - this.rgba[2],
        this.alpha
      ]);
    },

    toString: function () {
      return 'rgb' + (this.alpha < 1 ? 'a' : '') + '(' + this.rgba.slice(0, this.alpha >= 1 ? 3 : 4).join(', ') + ')';
    },
    clone: function () {
      return new _(this.rgba);
    },

    // Overlay a color over another
    overlayOn: function (color) {
      var overlaid = this.clone();
      var alpha = this.alpha;
      if (alpha >= 1) {
        return overlaid;
      }
      for (var i = 0; i < 3; i++) {
        overlaid.rgba[i] = overlaid.rgba[i] * alpha + color.rgba[i] * color.rgba[3] * (1 - alpha);
      }
      overlaid.rgba[3] = alpha + color.rgba[3] * (1 - alpha);
      return overlaid;
    },

    contrast: function (color) {
      // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
      var alpha = this.alpha;

      if (alpha >= 1) {
        if (color.alpha < 1) {
          color = color.overlayOn(this);
        }

        var l1 = this.luminance + 0.05;
        var l2 = color.luminance + 0.05;
        var ratio = l1 / l2;

        if (l2 > l1) {
          ratio = 1 / ratio;
        }

        // ratio = floor(ratio, 2);
        return {
          ratio: ratio,
          error: 0,
          min: ratio,
          max: ratio
        };
      }

      // If we’re here, it means we have a semi-transparent background
      // The text color may or may not be semi-transparent, but that doesn't matter
      var onBlack = this.overlayOn(_.BLACK);
      var onWhite = this.overlayOn(_.WHITE);
      var contrastOnBlack = onBlack.contrast(color).ratio;
      var contrastOnWhite = onWhite.contrast(color).ratio;

      var max = Math.max(contrastOnBlack, contrastOnWhite);

      // This is here for backwards compatibility and not used to calculate
      // `min`.  Note that there may be other colors with a closer luminance to
      // `color` if they have a different hue than `this`.
      var closest = this.rgb.map(function (c, i) {
        return Math.min(Math.max(0, (color.rgb[i] - c * alpha) / (1 - alpha)), 255);
      });

      closest = new _(closest);

      var min = 1;
      if (onBlack.luminance > color.luminance) {
        min = contrastOnBlack;
      } else if (onWhite.luminance < color.luminance) {
        min = contrastOnWhite;
      }

      return {
        ratio: (min + max) / 2,
        error: (max - min) / 2,
        min: min,
        max: max,
        closest: closest,
        farthest: onWhite === max ? _.WHITE : _.BLACK
      };
    }
  };

  _.BLACK = new _([ 0, 0, 0 ]);
  _.GRAY = new _([ 127.5, 127.5, 127.5 ]);
  _.WHITE = new _([ 255, 255, 255 ]);

})(window.aposds = { fn: {} });

// Generic app handlers
(function (NS) {
  // Color Visualization
  const rgbaToHex = (col) => {
    if (col.charAt(0) === 'r') {
      const rgb = col.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
      if (!rgb) {
        return col;
      }
      const r = (rgb[1] | 1 << 8).toString(16).slice(1);
      const g = (rgb[2] | 1 << 8).toString(16).slice(1);
      const b = (rgb[3] | 1 << 8).toString(16).slice(1);
      let a = rgb[4] && rgb[4] !== '1' ? rgb[4] : '';
      if (a) {
        a = ((a * 255) | 1 << 8).toString(16).slice(1);
      }
      const colHex = '#' + r + g + b + a;
      return colHex;
    }
  };

  function findEl(root, selector) {
    return selector === 'self' ? root : (
      selector.startsWith('#')
        ? document.querySelector(selector)
        : root.querySelector(selector)
    );
  }

  function replace(arr, style) {
    Array.prototype.forEach.call(arr, function (el) {
      switch (el.dataset.type) {
        case 'font':
          el.textContent = (style.fontFamily || '')
            .split(',')[0]
            .trim()
            .replace(/'/g, '')
            .replace(/"/g, '');
          break;
        case 'size':
          el.textContent = style.fontSize;
          break;
        case 'weight':
          el.textContent = style.fontWeight;
          break;
        case 'letter':
          el.textContent = style.letterSpacing;
          break;
        case 'line':
          el.textContent = style.lineHeight;
          break;
        case 'padding':
          el.textContent = style.paddingTop + ' ' + style.paddingRight + ' ' + style.paddingBottom + ' ' + style.paddingLeft;
          break;
        case 'margin':
          el.textContent = style.marginTop + ' ' + style.marginRight + ' ' + style.marginBottom + ' ' + style.marginLeft;
          break;
        case 'color':
          el.textContent = rgbaToHex(style.color);
          break;
        case 'background':
          el.textContent = rgbaToHex(style.backgroundColor);
          break;
        case 'image':
          el.textContent = style.backgroundImage;
          break;
      }
    });
  }

  function findAndReplace(detectSelector, setSelector, replacer) {
    const detectContainerEls = document.querySelectorAll(detectSelector);
    const detectSet = [];
    const previewStyles = [];
    // Gather info
    Array.prototype.forEach.call(detectContainerEls, function (el, i) {
      const previewSelector = el.dataset.target;
      if (!previewSelector) {
        return;
      }
      const previewEl = findEl(el, previewSelector);
      if (!previewEl) {
        return;
      }
      detectSet[i] = el.querySelectorAll(setSelector);
      previewStyles[i] = getComputedStyle(previewEl);
    });
    // fill data
    Array.prototype.forEach.call(detectSet, function (arr, i) {
      replacer(arr, previewStyles[i]);
    });
  }

  // Toggle things
  const toggle = (function () {
    const toggleHandlerFactory = function (content, iconEl) {
      return function toggleHandler(ev, state, defaults) {
        if (ev) {
          ev.preventDefault();
        }
        const shown = typeof state === 'undefined' ? content.style.display !== 'none' : state;
        let display = shown ? 'none' : 'block';
        if (defaults) {
          display = !shown ? 'none' : 'block';
        }
        content.style.display = display;
        if (iconEl) {
          let icon = shown ? 'expand_more' : 'expand_less';
          if (defaults) {
            icon = !shown ? 'expand_more' : 'expand_less';
          }
          iconEl.textContent = icon;
        }
      };
    };

    const toggleHandlers = [];
    const toggleAllHandlers = [];

    function init() {
      // Toggle listeners
      const toggleEls = document.querySelectorAll('.ds-toggle');
      Array.prototype.forEach.call(toggleEls, function (el) {
        const content = el.querySelector('.ds-toggle__content');
        const trigger = el.querySelector('.ds-toggle__trigger');
        if (!content || !trigger) {
          return;
        }
        const iconEl = trigger.querySelector('.ds-toggle__icon');
        const handler = toggleHandlerFactory(content, iconEl);
        toggleHandlers.push({
          handler: handler,
          trigger: trigger,
          type: 'click'
        });
        trigger.addEventListener('click', handler);
        handler(
          null,
          el.dataset.toggleState ? el.dataset.toggleState === 'true' : el.dataset.toggleState,
          true
        );
      });
      // all action listeners
      const toggleAllEls = document.querySelectorAll('.ds-toggle--all');
      Array.prototype.forEach.call(toggleAllEls, function (el) {
        let action;
        switch (el.dataset.action) {
          case 'toggle':
            action = toggleAll;
            break;
          case 'show':
            action = showAll;
            break;
          case 'hide':
            action = hideAll;
            break;
          default:
            action = toggleAll;
            break;
        }
        function handler(ev) {
          if (ev) {
            ev.preventDefault();
          } action();
        }
        toggleAllHandlers.push({
          handler: handler,
          trigger: el,
          type: 'click'
        });
        el.addEventListener('click', handler);
      });
    }
    function destroy() {
      Array.prototype.forEach.call(toggleHandlers, function (item) {
        item.trigger.removeEventListener(item.type, item.handler);
      });
      Array.prototype.forEach.call(toggleAllHandlers, function (item) {
        item.trigger.removeEventListener(item.type, item.handler);
      });
    }
    function hideAll() {
      Array.prototype.forEach.call(toggleHandlers, function (item) {
        item.handler(null, true);
      });
    }
    function showAll() {
      Array.prototype.forEach.call(toggleHandlers, function (item) {
        item.handler(null, false);
      });
    }
    function toggleAll() {
      Array.prototype.forEach.call(toggleHandlers, function (item) {
        item.handler();
      });
    }

    return {
      init: init,
      showAll: showAll,
      hideAll: hideAll,
      toggleAll: toggleAll,
      destroy: destroy
    };
  })();

  // Code highlight
  const highlight = (function () {
    function init() {
      const blocks = document.querySelectorAll('pre code');
      Array.prototype.forEach.call(blocks, function (block) {
        hljs.highlightBlock(block);
      });
    }
    return {
      init: init,
      destroy: function() {}
    };
  })();

  // Detect and fill type specimen data
  const types = (function () {
    // Heavilly based on https://github.com/LeaVerou/contrast-ratio
    const ratingMessages = {
      transparent: 'The background is semi-transparent, so the contrast ratio cannot be precise. Depending on what’s going to be underneath, it could be any of the following:',
      fail: 'Fails WCAG 2.0',
      aal: 'Passes AA for large text (above 24px or bold above 18px)',
      aa: 'Passes AA level for any size text and AAA for large text (above 24px or bold above 18px)',
      aaa: 'Passes AAA level for any size text'
    };

    const ratingLevels = {
      fail: {
        range: [ 0, 3 ],
        color: 'hsl(0, 100%, 40%)',
        label: 'Fail'
      },
      aal: {
        range: [ 3, 4.5 ],
        color: 'hsl(40, 100%, 45%)',
        label: 'AA(L)'
      },
      aa: {
        range: [ 4.5, 7 ],
        color: 'hsl(80, 60%, 45%)',
        label: 'AA'
      },
      aaa: {
        range: [ 7, 22 ],
        color: 'hsl(95, 60%, 41%)',
        label: 'AAA'
      }
    };

    // Math.floor with precision
    function floor(number, decimals) {
      decimals = +decimals || 0;
      const multiplier = Math.pow(10, decimals);
      return Math.floor(number * multiplier) / multiplier;
    }

    function matchLevel(contrast, levels) {
      const min = contrast.min;
      const max = contrast.max;
      const matches = [];

      for (const level in levels) {
        const bounds = levels[level].range;
        const lower = bounds[0];
        const upper = bounds[1];

        if (min < upper && max >= lower) {
          matches.push(level);
        }
      }
      return { matches: matches };
    }

    function getRatingLabel(contrast, levels) {
      const ratio = contrast.ratio;
      for (const level in levels) {
        const bounds = levels[level].range;
        const lower = bounds[0];
        const upper = bounds[1];

        if (ratio < upper && ratio >= lower) {
          return levels[level].label;
        }
      }
    }

    function getRatingRatio(contrast, matches) {
      if (matches.length === 1) {
        return floor(contrast.ratio, 2);
      } else if (matches.length > 1) {
        return floor(contrast.ratio, 2) + ' (±' + floor(contrast.error, 2) + ')';
      }
      return '';
    }

    function getRating(color, levels) {
      const contrast = color.contrast;
      return matchLevel(contrast, levels);
    }

    function appendDetails(wcag, rating, messages) {
      const matches = rating.matches;

      wcag.textContent = '';
      if (matches.length === 1) {
        wcag.textContent = ratingMessages[matches[0]];
        return;
      } else if (!matches.length) {
        return;
      }

      var p = document.createElement('p');
      p.textContent = messages.transparent;

      wcag.appendChild(p);

      var ul = document.createElement('ul');

      for (var i = 0; i < matches.length; i++) {
        var li = document.createElement('li');
        li.textContent = messages[matches[i]];
        ul.appendChild(li);
      }

      wcag.appendChild(ul);
    }

    function replaceRating(arr, color) {
      Array.prototype.forEach.call(arr, function (el) {
        const rating = getRating(color, ratingLevels);
        // console.log('CONTRAST', color.contrast, el);
        // console.log('RATING', rating);
        switch (el.dataset.type) {
          case 'crating-label':
            el.textContent = getRatingLabel(color.contrast, ratingLevels);
            break;
          case 'crating-ratio':
            el.textContent = getRatingRatio(color.contrast, rating.matches);
            break;
          case 'crating-details': {
            appendDetails(el, rating, ratingMessages);
            break;
          }
        }
      });
    }

    function findAndReplaceRating(detectSelector, setSelector, replacer) {
      const detectContainerEls = document.querySelectorAll(detectSelector);
      const detectRoots = [];
      const detectSet = [];
      const colors = [];
      Array.prototype.forEach.call(detectContainerEls, function (el, i) {
        const bgSelector = el.dataset.backgroundTarget;
        const fgSelector = el.dataset.foregroundTarget;
        const containerSelector = el.dataset.rootTarget;
        if (!bgSelector || !fgSelector || !containerSelector) {
          return;
        }
        const root = findEl(el, containerSelector);
        if (!root) {
          return;
        }
        detectRoots[i] = root;
        const bgEl = findEl(root, bgSelector);
        const fgEl = findEl(root, fgSelector);
        if (!bgEl || !fgEl) {
          return;
        }
        detectSet[i] = root.querySelectorAll(setSelector);
        const cbg = new NS.fn.Color(getComputedStyle(bgEl).backgroundColor);
        const cfg = new NS.fn.Color(getComputedStyle(fgEl).color);
        const contrast = cbg.contrast(cfg);
        colors[i] = {
          bg: cbg,
          fg: cfg,
          contrast: contrast
        };
      });
      // fill data
      Array.prototype.forEach.call(detectSet, function (arr, i) {
        replacer(arr, colors[i]);
        // Adapt rating background color
        const root = detectRoots[i];
        const previewSelector = root.dataset.previewTarget;
        const previewEl = previewSelector ? root.querySelector(previewSelector) : null;
        if (!previewEl) {
          return;
        }
        const rating = getRating(colors[i], ratingLevels);
        const matches = rating.matches;
        if (rating.matches.length !== 1) {
          return;
        }
        previewEl.style.backgroundColor = ratingLevels[matches[0]].color;
      });
    }

    function init() {
      findAndReplace('.ds-type--detect', '.ds-type--set', replace);
      findAndReplace('.ds-type--detect-global', '.ds-type--set-global', replace);
      findAndReplaceRating('.ds-type--detect-crating', '.ds-type--set-crating', replaceRating);
    }

    return {
      init: init,
      destroy: function () {}
    };
  })();

  const colors = (function () {
    function init() {
      findAndReplace('.ds-color--detect', '.ds-color--set', replace);
    }

    return {
      init: init,
      destroy: function () { }
    };
  })();

  const toggleAdmin = (function() {
    // A3 UI
    let aposUi;

    // Observer to find the apos UI node and disconnect
    const observer = new MutationObserver(observerHandler);

    function observerHandler(list, obs) {
      for (const mutation of list) {
        for (const node of mutation.addedNodes) {
          if (` ${node.className} `.indexOf(' apos-admin-bar-wrapper ') !== -1) {
            aposUi = node;
            // Send from the parent, should be iframe
            if (typeof window.aposAdminStatus !== 'undefined') {
              fixAdminBar(node);
              set(window.aposAdminStatus);
            } else if (!isIframe()) {
              // explcitly check if it's not iframe and enable
              fixAdminBar(node, true);
              show();
            }
            break;
          }
        }
        if (aposUi) {
          break;
        }
      }
      if (aposUi) {
        obs.disconnect();
      }
    }
    function fixAdminBar(wrapper, showUtils = false) {
      try {
        const bar = wrapper.querySelector('.apos-admin-bar');
        const utils = bar.querySelector('.apos-admin-bar__row--utils');
        if (!showUtils) {
          utils.style.display = 'none';
        }
        bar.style.position = 'static';
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error while fixing Apos admin UI', e);
      }
    }
    function isIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
    function init() {
      const target = document.querySelector('body');
      const config = {
        attributes: false,
        childList: true,
        subtree: false
      };
      observer.observe(target, config);

    }
    function destroy() {
      observer.disconnect();
    }
    function show() {
      if (!aposUi) {
        return;
      }
      aposUi.style.display = 'block';
    }
    function hide() {
      if (!aposUi) {
        return;
      }
      aposUi.style.display = 'none';
    }
    function set(flag) {
      if (flag) {
        show();
      } else {
        hide();
      }
    }

    return {
      init: init,
      destroy: destroy,
      show: show,
      hide: hide,
      set: set
    };
  })();

  const modal = (function () {
    /**
     *
     * @param {String|HTMLElement} selectorOrEl
     * @returns {HTMLElement | null}
     */
    function getEl(selectorOrEl) {
      let el = selectorOrEl;
      if (typeof el === 'string') {
        el = document.querySelector(selectorOrEl);
      }
      return el;
    }

    function open(selectorOrEl, height) {
      const el = getEl(selectorOrEl);
      if (!el) {
        return;
      }
      el.style.height = height || '50vh';
      el.style.opacity = 1;
    }

    function close(selectorOrEl) {
      const el = getEl(selectorOrEl);
      if (!el) {
        return;
      }
      el.style.height = 0;
      el.style.opacity = 0;
    }

    function toggle(selectorOrEl, height) {
      const el = getEl(selectorOrEl);
      if (!el) {
        return;
      }
      const isVisible = +getComputedStyle(el).opacity;
      el.style.height = isVisible ? 0 : height || '50vh';
      el.style.opacity = isVisible ? 0 : 1;
    }

    function modalCloseHandlerFactory(modal) {
      return function (ev) {
        ev.preventDefault();
        close(modal);
      };
    }

    const handlers = [];
    function init() {
      Array.prototype.forEach.call(document.querySelectorAll('.ds-modal'), function(modal) {
        const buttons = modal.querySelectorAll('.ds-modal__close-button');
        Array.prototype.forEach.call(buttons, function (button) {
          const handler = modalCloseHandlerFactory(modal);
          button.addEventListener('click', handler);
          handlers.push({
            el: button,
            fn: handler
          });
        });
      });
    }

    function destroy() {
      Array.prototype.forEach.call(handlers, function (handler) {
        handler.el.removeEventListener('click', handler.fn);
      });
    }

    return {
      init: init,
      destroy: destroy,
      open: open,
      close: close,
      toggle: toggle
    };
  })();

  const story = (function () {
    function openDetails() {
      NS.modal.open('#ds-story__details', '65vh');
    }

    function closeDetails() {
      NS.modal.close('#ds-story__details');
    }

    function toggleDetails() {
      NS.modal.toggle('#ds-story__details', '65vh');
    }

    return {
      init: function () { },
      destroy: function () { },
      openDetails: openDetails,
      closeDetails: closeDetails,
      toggleDetails: toggleDetails
    };
  })();

  // Register to the namespace
  NS.highlight = highlight;
  NS.toggle = toggle;
  NS.types = types;
  NS.colors = colors;
  NS.toggleAdmin = toggleAdmin;
  NS.modal = modal;
  NS.story = story;

  NS.init = function () {
    NS.highlight.init();
    NS.toggle.init();
    NS.types.init();
    NS.colors.init();
    NS.toggleAdmin.init();
    NS.modal.init();
    NS.story.init();
  };

  NS.destroy = function () {
    NS.highlight.destroy();
    NS.toggle.destroy();
    NS.types.destroy();
    NS.colors.destroy();
    NS.toggleAdmin.destroy();
    NS.modal.destroy();
    NS.story.destroy();
  };

  NS.reinit = function () {
    NS.destroy();
    NS.init();
  };
})(window.aposds);

// Init
window.aposds.init();

// custom events - can be triggered from everywhere
document.addEventListener('aposds:destroy', function () {
  window.aposds.destroy();
});
document.addEventListener('aposds:reinit', function () {
  window.aposds.reinit();
});
