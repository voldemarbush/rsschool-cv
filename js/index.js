const body = document.querySelector('body');
const sliderMargin = document.querySelector(':root');
const navBar = document.querySelector('.cv__navbar');
const menu = document.querySelector('.cv__navbar-menu');
const burgerIcon = document.querySelector('.cv__navbar-menu_icon');
const burger = document.querySelector('.cv__navbar-burger');
const sliderUp = document.querySelector('.cv__portfolio-projects_icon.up');
const sliderDown = document.querySelector('.cv__portfolio-projects_icon.down');

let slide = 0;

const closeMenu = () => {
  body.classList.toggle('active');
  navBar.classList.toggle('expand');
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('close');
};

burger.addEventListener('click', closeMenu);

menu.addEventListener('click', closeMenu);

sliderDown.addEventListener('click', function () {
  slide += slide > 2 ? 0 : 1;
  console.log(slide);
  if (slide > 2) sliderDown.classList.add('inactive');
  if (slide > 0) sliderUp.classList.remove('inactive');
  sliderMargin.style.setProperty('--slider-mrg', `-${slide * 23}vw`);
});

sliderUp.addEventListener('click', function () {
  slide -= slide < 1 ? 0 : 1;
  console.log(slide);
  if (slide < 1) sliderUp.classList.add('inactive');
  if (slide < 3) sliderDown.classList.remove('inactive');
  sliderMargin.style.setProperty('--slider-mrg', `-${slide * 23}vw`);
});
