const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'phone': 'Phone',
      'message': 'Message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'phone': 'Телефон',
      'message': 'Сообщение'
    }
  }

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

// Translate

const enLang = document.querySelector('.languages__item_en');
const ruLang = document.querySelector('.languages__item_ru');

function getTranslate(lang) {
    const translateElement = document.querySelectorAll('[data-i18]');
    document.documentElement.lang = `${lang}`;

    if (event.target.classList.contains('languages__item')) {        
            enLang.classList.toggle('languages__item_active');
            ruLang.classList.toggle('languages__item_active');
    }

    translateElement.forEach((el) => {
        el.textContent = i18Obj[lang][el.dataset.i18];

        if (el.placeholder) {
            el.placeholder = i18Obj[lang][el.dataset.i18];
            el.textContent = '';
        }
    });
}

enLang.addEventListener('click', (event) => {
    getTranslate('en', event);
});
ruLang.addEventListener('click', (event) => {
    getTranslate('ru', event);
});

// Change color theme

const themeButton = document.querySelector('.theme-image');
const body = document.body;

function changeTheme() {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {        
        document.documentElement.style.setProperty('--color-black', '#ffffff');
        document.documentElement.style.setProperty('--color-white', '#000000');  
    } 
    if (!body.classList.contains('light')) {
        document.documentElement.style.setProperty('--color-black', '#000000');
        document.documentElement.style.setProperty('--color-white', '#ffffff');
    }
}

themeButton.addEventListener('click', changeTheme);

// Local storage

function setLocalStorage() {
    localStorage.setItem('lang', document.documentElement.lang);
    localStorage.setItem('theme', document.body.classList);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        const translateElement = document.querySelectorAll('[data-i18]');
        translateElement.forEach((el) => {
            el.textContent = i18Obj[lang][el.dataset.i18];
    
            if (el.placeholder) {
                el.placeholder = i18Obj[lang][el.dataset.i18];
                el.textContent = '';
            }
        });   
    }
    if (localStorage.getItem('theme')) {
        changeTheme();
    }
};
window.addEventListener('load', getLocalStorage);