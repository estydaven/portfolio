const menu = document.querySelector('.nav');
const burger = document.querySelector('.burger');

function openMenu() {
    menu.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
}

burger.addEventListener('click', openMenu);
menu.addEventListener('click', openMenu);