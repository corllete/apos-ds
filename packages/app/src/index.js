// So the CSS is part of the bundle
import './index.scss';

//
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
iconButtons.forEach(el => new MDCRipple(el));

// Text field
const textFields = Array.from(document.querySelectorAll('.mdc-text-field'));
textFields.forEach(el => new MDCTextField(el));
// character counts
const characterCounters = Array.from(document.querySelectorAll('.mdc-text-field-character-counter'));
characterCounters.forEach(el => new MDCTextFieldCharacterCounter(el));
// icons
const textIcons = Array.from(document.querySelectorAll('.mdc-text-field-icon'));
textIcons.forEach(el => new MDCTextFieldIcon(el));
