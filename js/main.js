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

const portfolioImages = document.querySelectorAll('.photo');
const portfolioBtn = document.querySelectorAll('.portfolio__button');

function changeImage(event) {
    if (event.target.classList.contains('portfolio__button')) {
        portfolioImages.forEach((img, index) => img.src = `images/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioBtn.forEach((elem) => {
            elem.classList.remove('portfolio__button_active');
            event.target.classList.add('portfolio__button_active');
        });
    }
}

portfolioBtn.forEach((el) => el.addEventListener('click', changeImage));

// Cashing portfolio images

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach((season) => {
        for (let i = 1; i < 6; i++) {
            const img = new Image();
            img.src = `images/${season}/${i}.jpg`;
        }
    })
}
preloadImages();