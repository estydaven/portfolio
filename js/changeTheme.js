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

export {changeTheme};