//
// This is a naive implementation, for demonstration purposes only!
// Initialize material design components
//
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { MDCTextFieldIcon } from '@material/textfield/icon';

// Buttons Ripple
const buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
buttonEls.forEach(el => new MDCRipple(el));
const iconButtons = Array.from(document.querySelectorAll('.mdc-icon-button'));
iconButtons.forEach(el => {
  const ripple = new MDCRipple(el);
  ripple.unbounded = true;
});

// Text field
const textFields = Array.from(document.querySelectorAll('.mdc-text-field'));
textFields.forEach(el => new MDCTextField(el));
// character counts
const characterCounters = Array.from(document.querySelectorAll('.mdc-text-field-character-counter'));
characterCounters.forEach(el => new MDCTextFieldCharacterCounter(el));
// icons
const textIcons = Array.from(document.querySelectorAll('.mdc-text-field-icon'));
textIcons.forEach(el => new MDCTextFieldIcon(el));
