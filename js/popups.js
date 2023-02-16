const hireButton = document.querySelector('.button_hire');
const hirePopup = document.querySelector('.popup_hire');
const closeButtonHire = document.querySelector('.popup__close_hire');
const priceButtons = document.querySelectorAll('[data-price]');
const pricePopup = document.querySelector('.popup_price');
const closeButtonPrice = document.querySelectorAll('.popup__close_price');
const popupPrice = document.querySelector('.popup__price');
const body = document.body;

function showHirePopup() {
    hirePopup.style.display = 'flex';
    body.style.overflow = 'hidden';
}
function closeHirePopup() {
    hirePopup.style.display = 'none';
    body.style.overflow = 'auto';
}
function showPricePopup() {
    popupPrice.innerText = this.dataset.price;
    pricePopup.style.display = 'flex';
    body.style.overflow = 'hidden';
}
function closePricePopup() {
    pricePopup.style.display = 'none';
    body.style.overflow = 'auto';
}

hireButton.addEventListener('click', showHirePopup);
closeButtonHire.addEventListener('click', closeHirePopup);
priceButtons.forEach(btn => btn.addEventListener('click', showPricePopup));
closeButtonPrice.forEach(btnClose => btnClose.addEventListener('click', closePricePopup));

export {showHirePopup, closeHirePopup, showPricePopup, closePricePopup};