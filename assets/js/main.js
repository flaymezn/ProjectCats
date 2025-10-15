import { initRouter } from './router.js';
import { initFormValidator } from './form-validator.js';
import { initMasks } from './masks.js';

function onReady() {
  initRouter();
  initFormValidator();
  initMasks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  onReady();
}