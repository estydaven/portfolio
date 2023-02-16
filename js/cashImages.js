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

export {preloadImages};