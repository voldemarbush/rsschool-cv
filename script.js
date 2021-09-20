const burger = document.querySelector(".header_burger");
const nav = document.querySelector(".header_nav");
const body = document.querySelector("body");
const menuitem = document.querySelector(".nav_menu");

menuitem.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('scroll_lock');
});

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('scroll_lock');
});

