import { initRouter } from './router.js';
import { initFormValidator } from './form-validator.js';
import { initMasks } from './masks.js';

// Função para ser executada quando o conteúdo da página for carregado
function onReady() {
  initRouter();
  initFormValidator();
  initMasks();
}

// Verifica se o documento já foi carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  // Se já foi carregado, executa imediatamente
  onReady();
}