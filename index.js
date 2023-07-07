const body = document.querySelector('body');
const navBar = document.querySelector('.cv__navbar');
const menu = document.querySelector('.cv__navbar-menu');
const burgerIcon = document.querySelector('.cv__navbar-menu_icon');
const burger = document.querySelector('.cv__navbar-burger');

burger.addEventListener('click', function () {
  body.classList.toggle('active');
  navBar.classList.toggle('expand');
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('close');
});
