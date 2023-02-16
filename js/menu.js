const menu = document.querySelector('.nav');
const burger = document.querySelector('.burger');

function toggleMenu() {
    menu.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
}

burger.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

export {toggleMenu};