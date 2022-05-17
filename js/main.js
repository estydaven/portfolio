// Adaptive menu

const menu = document.querySelector('.nav');
const burger = document.querySelector('.burger');

function toggleMenu() {
    menu.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
}

burger.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

// Change portfolio photos

const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImages = document.querySelectorAll('.photo');

function changeImage(e) {
    if (e.target.classList.contains('portfolio__button')) {
        portfolioImages.forEach((img, index) => img.src = `images/${e.target.dataset.season}/${index + 1}.jpg`);
    }
}

portfolioBtns.addEventListener('click', changeImage);