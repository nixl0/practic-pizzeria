/**
 * Обработка переключения тем
 */

 function determineTheme() {
    const darkTheme = window.sessionStorage.getItem('theme')
    const style = document.querySelector('#style')
    if (darkTheme == 'dark') {
        style.href = '/static/css/style-dark.css'
    }
    else {
        style.href = '/static/css/style-light.css'
    }
}

determineTheme()

const themeToggler = document.querySelector('#theme-toggler')
themeToggler.addEventListener('click', () => {
    if (window.sessionStorage.getItem('theme') == 'dark') {
        window.sessionStorage.setItem('theme', 'light')
        determineTheme()
    }
    else {
        window.sessionStorage.setItem('theme', 'dark')
        determineTheme()
    }
})