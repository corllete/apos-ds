import {
  MDCDrawer,
  MDCFormField,
  MDCIconButtonToggle,
  MDCRipple,
  MDCSwitch,
  MDCTabBar,
  MDCTopAppBar
} from './components';
// Config
import storage from './storage';

// Init global namespace

const DS = {};
window.aposds = DS;

// get query string var helper (by MDN docs)
// Should be replaced with https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#Example
// if we decide to support only modern browsers.
function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[.+*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
}

//
// Instantiate all components in the main content
//

const mainEl = document.querySelector('.ds-main-content');
const contentEl = document.querySelector('.mdc-drawer-app-content');

// Button
const buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));
buttonEls.forEach((el) => new MDCRipple(el));

// Icon button toggle
const iconToggleEls = Array.from(mainEl.querySelectorAll('.mdc-icon-button'));
iconToggleEls.forEach(el => {
  const toggleIcon = new MDCIconButtonToggle(el);
  toggleIcon.unbounded = true;
});

// FAB
const fabEls = Array.from(mainEl.querySelectorAll('.mdc-fab'));
fabEls.forEach((el) => new MDCRipple(el));

// Switch
const switchEls = Array.from(mainEl.querySelectorAll('.mdc-switch'));
switchEls.forEach((el) => new MDCSwitch(el));

// Tabs
const tabBarEls = Array.from(document.querySelectorAll('.mdc-tab-bar'));
tabBarEls.forEach(el => new MDCTabBar(el));

//
// DS drawer contents
//

const dsDrawerEl = document.querySelector('.ds-drawer');

// DS drawer tabs
// eslint-disable-next-line no-new
new MDCTabBar(dsDrawerEl.querySelector('.mdc-tab-bar'));
const instructions = dsDrawerEl.querySelector('.drawer-content--first');
const themeSummary = dsDrawerEl.querySelector('.drawer-content--second');
dsDrawerEl.querySelector('.drawer-tab--first').addEventListener('MDCTab:interacted', () => {
  instructions.style.display = 'block';
  themeSummary.style.display = 'none';
});
dsDrawerEl.querySelector('.drawer-tab--second').addEventListener('MDCTab:interacted', () => {
  instructions.style.display = 'none';
  themeSummary.style.display = 'block';
});

// Apos admin toggle
const formFieldAaEl = dsDrawerEl.querySelector('.apos-admin-form-field');
const aaSwitchEl = dsDrawerEl.querySelector('.apos-admin-switch');

// Action top bar
const contentToolBar = contentEl.querySelector('.ds-config-bar');
const contentToolBarLarge = contentEl.querySelector('.ds-config-bar--large');

// Iframe access
const contentIframeContainer = contentEl.querySelector('.ds-content-preview');
const contentIframe = contentIframeContainer.querySelector('.ds-content-preview__body');
/** @type {HTMLIFrameElement} */
const storyIframe = contentIframeContainer.querySelector('.ds-content-preview__body');
const storyNs = storyIframe ? storyIframe.contentWindow : null;
// A2 UI
// const aposUi = Array.from(document.querySelectorAll('.apos-ui'));
// A3 UI - removed from the layout template
// const aposUi = Array.from(document.querySelectorAll('.apos-admin-bar-wrapper'));

if (formFieldAaEl && aaSwitchEl) {
  const formField = new MDCFormField(formFieldAaEl);
  const switchHandler = new MDCSwitch(aaSwitchEl);
  formField.input = switchHandler;
  const input = formFieldAaEl.querySelector('#apos-admin-input');
  switchHandler.checked = storage.getItem('apos.admin');

  input.addEventListener('change', function () {
    storage.setItem('apos.admin', switchHandler.checked);
    if (!storyNs) {
      return;
    }
    storyNs.aposds.toggleAdmin.set(switchHandler.checked);
  });
}

//
// Theme Builder app bar

const themeBuilderAppBar = new MDCTopAppBar(document.querySelector('.ds-app-bar'));

//
// Handle responsive layout
//

let dsDrawer = null;
const initModalDrawer = () => {
  dsDrawerEl.classList.add('mdc-drawer--modal');
  dsDrawer = new MDCDrawer(dsDrawerEl);
  dsDrawer.open = false;
  themeBuilderAppBar.setScrollTarget(mainEl);
  themeBuilderAppBar.listen('MDCTopAppBar:nav', () => {
    dsDrawer.open = !dsDrawer.open;
  });
};
const destroyModalDrawer = () => {
  dsDrawerEl.classList.remove('mdc-drawer--modal');
  if (dsDrawer) {
    dsDrawer.destroy();
  }
};

// Toggle sidebar on Large screens
const actionToggleSide = contentEl.querySelector('.ds-config-bar--large .ds-action--toggle-side');
const setActionToggleIcon = () => {
  if (dsDrawerEl.style.display === 'none') {
    actionToggleSide.textContent = 'chevron_right';
    return;
  }
  actionToggleSide.textContent = 'chevron_left';
};

const setLargeSidebarVis = (visible) => {
  dsDrawerEl.style.display = visible ? 'flex' : 'none';
  setActionToggleIcon();
};

const toggleLargeSidebar = () => {
  const newVisible = dsDrawerEl.style.display === 'none';
  setLargeSidebarVis(newVisible);
  storage.setItem('sidebar.visibility', newVisible);
};

const detectLargeSidebarVis = () => {
  const full = parseInt(getQueryStringValue('full'), 10);
  if (full === 1) {
    storage.setItem('sidebar.visibility', false);
  }
  const setting = storage.getItem('sidebar.visibility');
  if (typeof setting === 'boolean') {
    setLargeSidebarVis(setting);
  }
};

// Toggle between permanent drawer and modal drawer at 1310px
let largeScreen;
const layoutForScreenSize = () => {
  if (window.matchMedia('(max-width: 1310px)').matches) {
    largeScreen = false;
    dsDrawerEl.style.removeProperty('display');
    initModalDrawer();
    mainEl.classList.add('mdc-top-app-bar--fixed-adjust');
    if (actionToggleSide) {
      actionToggleSide.style.display = 'none';
    }
  } else {
    largeScreen = true;
    destroyModalDrawer();
    detectLargeSidebarVis();
    mainEl.classList.remove('mdc-top-app-bar--fixed-adjust');
    if (actionToggleSide) {
      actionToggleSide.style.display = 'inline-block';
    }
  }
  const event = new CustomEvent('ds:layoutResized', { detail: { large: largeScreen } });
  document.dispatchEvent(event);
};

// Resize iframe
const calculateContentResizeHeight = () => {
  const style = getComputedStyle(contentEl);
  const containerContentHeight = contentEl.clientHeight - parseInt(style.paddingTop, 10) - parseInt(style.paddingBottom);
  // console.log('CONTAINER HEIGHT (clientHeight - padding)', containerContentHeight);

  const styleTb = getComputedStyle(contentToolBar);
  const isTbVisible = styleTb.display !== 'none';
  // console.log('TOOLBAR HEIGHT visible', isTbVisible);

  const styleTbLarge = getComputedStyle(contentToolBarLarge);
  const isTbLargeVisible = styleTbLarge.display !== 'none';
  // console.log('LARGE TOOLBAR HEIGHT visible', isTbLargeVisible);

  let offsetHeight = 0;

  // We are on large screen
  if (isTbLargeVisible) {
    const bounded = contentToolBarLarge.getBoundingClientRect();
    offsetHeight = bounded.bottom;
  } else if (isTbVisible) {
    const bounded = contentToolBar.getBoundingClientRect();
    offsetHeight = bounded.bottom;
  }

  const resizeHeight = containerContentHeight - offsetHeight;

  // console.log('OFFSET', offsetHeight);
  // console.log('FINAL RESIZE HEIGHT', resizeHeight);

  return resizeHeight;
};

const resizeContentHeight = () => {
  if (contentIframe) {
    const height = calculateContentResizeHeight();
    contentIframeContainer.style.height = (height - 0) + 'px';
    contentIframe.style.height = (height - 1) + 'px';
    return height;
  }
};

const resizeContentWidth = (width, unit = 'px') => {
  switch (width) {
    case 'small':
      contentIframeContainer.style.width = '380px';
      break;

    case 'medium':
      contentIframeContainer.style.width = '620px';
      break;

    case 'large':
      contentIframeContainer.style.width = '1000px';
      break;

    case 'full':
      contentIframeContainer.style.width = '100%';
      break;

    default:
      contentIframeContainer.style.width = parseInt(width, 10) + unit;
      break;
  }
};

const resizePreviewViewportClickHandler = (ev) => {
  const size = ev.target.dataset.size;
  resizeContentWidth(size);
};

// Iframe listeners

// Initialize apos admin visibility
if (storyNs) {
  // send signal to the iframe document namespace
  storyNs.window.aposAdminStatus = !!storage.getItem('apos.admin');
}

const toggleStoryDetailsHandler = (ev) => {
  if (ev) {
    ev.preventDefault();
  }
  if (!storyNs) {
    return;
  }
  storyNs.aposds.story.toggleDetails();
};

DS.resizeContentHeight = resizeContentHeight;
DS.resizeContentWidth = resizeContentWidth;
DS.storyNs = storyNs;
DS.copyToClipboard = str => {
  // Source: https://www.30secondsofcode.org/js/s/copy-to-clipboard/
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

// LISTENERS
window.addEventListener('resize', layoutForScreenSize);

// triggered after layout resize - adjust iframe height
document.addEventListener('ds:layoutResized', resizeContentHeight);

// resize viewport action buttons
const dsActionButtons = Array.from(contentEl.querySelectorAll('.ds-action--resize'));
dsActionButtons.forEach(btn => btn.addEventListener('click', resizePreviewViewportClickHandler));

// story details toggle actions
const storyDetailsToggleActionButtons = Array.from(contentEl.querySelectorAll('.ds-action--story-info'));
storyDetailsToggleActionButtons.forEach(btn => btn.addEventListener('click', toggleStoryDetailsHandler));

// Large screen sidebar control
if (actionToggleSide) {
  actionToggleSide.addEventListener('click', toggleLargeSidebar);
}

document.addEventListener('DOMContentLoaded', function () {
  layoutForScreenSize();
});
