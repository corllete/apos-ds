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
            const regex = new RegExp(/^(\d+(\.\d+)?)$/);
            res = {
              size: regex.test(size) ? +size : size,
              line: regex.test(line) ? +line : line
            };
          } else {
            // it's a css class name
            res = {
              cls: h,
              label: '.' + h
            };
          }
        } else {
          // Header - it's a css class name
          res = {
            cls: h,
            label: '.' + h
          };
        }
      }
    }

    // Merge global with item data
    const {
      font, color, weight, tracking, padding, background, image, label
    } = options;
    res = {
      weight,
      tracking,
      padding,
      label,
      ...res,
      font,
      color,
      background,
      image
    };

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
    if (typeof res.label === 'string') {
      res.label = res.label.replace(/\{level\}/g, res.level);
    }
    if (typeof res.cls === 'string') {
      res.cls = res.cls.replace(/\{level\}/g, res.level);
    }

    // Pre-compute styles
    const previewStyle = [];
    if (res.size) {
      previewStyle.push(`font-size: ${res.size};`);
    }
    if (res.line) {
      previewStyle.push(`line-height: ${res.line};`);
    }
    if (res.font) {
      previewStyle.push(`font-family: '${res.font}';`);
    }
    if (res.color) {
      previewStyle.push(`color: ${res.color};`);
    }
    if (res.weight) {
      previewStyle.push(`font-weight: ${res.weight};`);
    }
    if (typeof res.tracking !== 'undefined') {
      previewStyle.push(`letter-spacing: ${res.tracking};`);
    }
    if (typeof res.padding !== 'undefined') {
      previewStyle.push(`padding: ${res.padding};`);
    }
    if (typeof res.margin !== 'undefined') {
      previewStyle.push(`margin: ${res.margin};`);
    }

    res.previewStyle = previewStyle.join(' ').trim();
    return res;
  });
}

function normalizeTypeOptionsHelper(options = {}) {
  const res = { ...options };
  // Pre-compute styles
  const mainStyle = [];
  if (options.background && typeof options.background !== 'boolean') {
    mainStyle.push(`background-color: ${options.background};`);
  }
  if (options.image && typeof options.image !== 'boolean') {
    mainStyle.push(`background-image: url(${options.image}); background-size: cover; background-repeat: no-repeat;`);
  }
  if (options.metaColor) {
    mainStyle.push(`color: ${options.metaColor};`);
  }
  res.mainStyle = mainStyle.join(' ').trim();
  return res;
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
