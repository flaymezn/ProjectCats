import { initRouter } from './router.js';
import { initFormValidator } from './form-validator.js';
import { initMasks } from './masks.js';
import { initThemeSwitcher } from './theme-switcher.js';

function onReady() {
  initRouter();
  initFormValidator();
  initMasks();
  initThemeSwitcher();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  onReady();
}