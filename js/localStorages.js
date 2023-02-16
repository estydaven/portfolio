import {i18Obj, getTranslate} from "./translate.js";
import {changeTheme} from "./changeTheme.js";

function setLocalStorage() {
    localStorage.setItem('lang', document.documentElement.lang);
    localStorage.setItem('theme', document.body.classList);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
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

export {setLocalStorage, getLocalStorage};