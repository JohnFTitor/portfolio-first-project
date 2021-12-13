const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', toggleMenu);

const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.querySelector('#menu').classList.toggle('menu-invisible');
}

const menuLinks = document.querySelectorAll('.menu-item a');
menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});