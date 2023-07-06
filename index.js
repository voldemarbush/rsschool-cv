const navBar = document.querySelector('.cv__navbar');
const menu = document.querySelector('.cv__navbar-menu');
const burgerIcon = document.querySelector('.cv__navbar-menu_icon');
const burger = document.querySelector('.cv__navbar-burger');

console.log(menu, navBar, burger);

burger.addEventListener('click', function () {
  navBar.classList.toggle('expand');
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('close');
});
