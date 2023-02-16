const upButton = document.querySelector('.up');

function scrollUp() {
    if (window.pageYOffset > 500) {
        upButton.style.display = 'flex';
    } else {
        upButton.style.display = 'none';
    }
}

window.addEventListener('scroll', scrollUp);

export {scrollUp};