const _ = require('@sailshq/lodash');

function normalizeTypeHelper(arr, options = {}) {
  let input = arr;
  if (typeof arr === 'number') {
    input = Array(arr).fill('auto');
  }
  if (!Array.isArray(input)) {
    return input;
  }
  return input.map((h, i) => {
    let res = h;
    // The header size
    if (typeof h === 'number') {
      res = {
        size: h,
        margin: 0
      };
    } else if (typeof h === 'string') {
      // the header auto
      if (h === 'auto') {
        // auto build h1-6
        res = { margin: 0 };
      } else {
        // paragraph
        if (options.type === 'p') {
          const [ size, line ] = h.split('/', 2);
          if (size && line) {
            const regex = /^(\d+(\.\d+)?)$/;
            res = {
              size: regex.test(size) ? +size : size,
              line: regex.test(line) ? +line : line
            };
          } else {
            // it's a css class name
            res = {
              cls: h,
              label: 'p.' + h
            };
          }
        } else if (options.type === 'custom') {
          // custom type
          res = {
            tag: h
          };
        } else {
          // Header - it's a css class name
          res = {
            cls: h,
            label: `h${i + 1}.` + h
          };
        }
      }
    }

    // Merge global with item data
    const {
      font, color, line, weight, tracking, padding, background,
      image, label, truncate, content, showClass
    } = options;
    res = {
      weight,
      tracking,
      line,
      padding,
      label,
      truncate,
      content,
      font,
      showClass,
      ...res,
      color,
      background,
      image
    };

    // custom type with defaults
    if (options.type === 'custom') {
      if (!res.tag) {
        res.tag = 'div';
      }
      if (!res.content) {
        res.content = res.tag;
      }
      if (!res.label) {
        res.label = res.tag;
      }
    }

    // normalize size
    if (typeof res.size === 'number') {
      res.size = `${res.size}px`;
    }

    // normalize line
    if (typeof res.line === 'number') {
      res.line = `${res.line}px`;
    }
    res.level = res.level || i + 1;
    // allow level mask for classes and labels
    if (res.label && typeof res.label === 'string') {
      res.label = res.label.replace(/\{level\}/g, res.level);
    }
    if (res.cls && typeof res.cls === 'string') {
      res.cls = res.cls.replace(/\{level\}/g, res.level);
      // if cls should be shown, disable className property
      if (res.showClass) {
        res.className = false;
      }
    }

    // Pre-compute styles
    const previewStyle = [];
    if (res.size && typeof res.size !== 'boolean') {
      previewStyle.push(`font-size: ${res.size};`);
    }
    if (res.line && typeof res.line !== 'boolean') {
      previewStyle.push(`line-height: ${res.line};`);
    }
    if (res.font && typeof res.font !== 'boolean') {
      previewStyle.push(`font-family: '${res.font}';`);
    }
    if (res.color && typeof res.color !== 'boolean') {
      previewStyle.push(`color: ${res.color};`);
    }
    if (res.weight && typeof res.weight !== 'boolean') {
      previewStyle.push(`font-weight: ${res.weight};`);
    }
    if (res.tracking && typeof res.tracking !== 'boolean') {
      previewStyle.push(`letter-spacing: ${res.tracking};`);
    }
    if (res.padding && typeof res.padding !== 'boolean') {
      previewStyle.push(`padding: ${res.padding};`);
    }
    if (res.margin && typeof res.margin !== 'boolean') {
      previewStyle.push(`margin: ${res.margin};`);
    }

    res.previewStyle = previewStyle.join(' ').trim();
    return res;
  });
}

function normalizeTypeOptionsHelper(options = {}) {
  const opts = { ...options };
  // defaults
  switch (opts.type) {
    case 'p':
    case 'h':
    case 'custom':
      // enable by default if detect is true
      if (typeof opts.color === 'undefined' && opts.detect) {
        opts.color = true;
      }
      if (typeof opts.weight === 'undefined' && opts.detect) {
        opts.weight = true;
      }
      if (typeof opts.tracking === 'undefined' && opts.detect) {
        opts.tracking = true;
      }
      if (typeof opts.line === 'undefined' && opts.detect) {
        opts.line = true;
      }
      if (typeof opts.font === 'undefined' && opts.detect) {
        opts.font = true;
      }
      // heading only
      if (opts.type === 'h' && typeof opts.truncate === 'undefined') {
        opts.truncate = true;
      }
      // custom only
      if (opts.type === 'custom' && typeof opts.size === 'undefined' && opts.detect) {
        opts.size = true;
      }
      break;
  }

  // Pre-compute styles
  const mainStyle = [];
  if (opts.background && typeof opts.background !== 'boolean') {
    mainStyle.push(`background-color: ${opts.background};`);
  }
  if (opts.image && typeof opts.image !== 'boolean') {
    mainStyle.push(`background-image: url(${opts.image}); background-size: cover; background-repeat: no-repeat;`);
  }
  if (opts.metaColor) {
    mainStyle.push(`color: ${opts.metaColor};`);
  }
  opts.mainStyle = mainStyle.join(' ').trim();
  return opts;
}

function getParentCategories(categories) {
  const result = {};
  _.each(categories, (cat, id) => {
    if (/* cat.list &&  */cat.parents.length === 0) {
      result[id] = cat;
    }
  });
  return result;
}

function markActiveStory(current, configs) {
  _.each(configs, (config) => {
    let loop;
    for (const story of config.stories) {
      if (story.slug === current) {
        story.active = true;
        loop = false;
        break;
      }
    }
    return loop;
  });
}

function markActiveCategories(current, categories) {
  const setActive = (id) => {
    const cat = categories[id];
    if (cat) {
      cat.active = true;
      for (const parentId of cat.parents) {
        setActive(parentId);
      }
    }
  };
  _.each(categories, (cat) => {
    if (cat.slug === current) {
      setActive(cat._id);
      return false;
    }
  });
}

exports.normalizeTypeHelper = normalizeTypeHelper;
exports.normalizeTypeOptionsHelper = normalizeTypeOptionsHelper;
exports.getParentCategories = getParentCategories;
exports.markActiveStory = markActiveStory;
exports.markActiveCategories = markActiveCategories;
