const botaoMenu = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu-principal');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});