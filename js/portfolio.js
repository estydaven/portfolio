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

export {changeImage};