const getItem = (key) => {
  const val = window.localStorage.getItem(`dsconf.${key}`);
  if (val !== null) {
    return JSON.parse(val);
  }
  return null;
};

const setItem = (key, val) => {
  return window.localStorage.setItem(`dsconf.${key}`, val);
};

const removeItem = (key) => {
  return window.localStorage.removeItem(`dsconf.${key}`);
};

export default {
  getItem,
  setItem,
  removeItem
};
