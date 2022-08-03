/**
 * Обработка переключения тем
 */

let THEME = 'light'

let themeToggler = document.querySelector('#theme-toggler')
themeToggler.addEventListener('click', () => {
    let style = document.querySelector('#style')
    if (THEME == 'light') {
        style.href = '/static/css/style-dark.css'
        THEME = 'dark';
    }
    else {
        style.href = '/static/css/style-light.css'
        THEME = 'light';
    }
})