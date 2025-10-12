export function initMasks() {
  const phoneInput = document.getElementById('telefone');

  if (phoneInput) {
    const phoneMask = IMask(phoneInput, {
      mask: '(00) 00000-0000'
    });
  }
}