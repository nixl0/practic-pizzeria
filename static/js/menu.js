/**
 * Категории меню
 */

let categoryInputs = document.querySelectorAll('.foods__category__input')
// console.log(categoryInputs)
 categoryInputs.forEach(categoryInput => {
     categoryInput.addEventListener('change', () => {
        let bc = categoryInput.parentElement.style.backgroundColor
        if (bc == 'var(--color-redimmed)') {
            categoryInput.parentElement.style.backgroundColor = 'var(--color-background)'
        }
        else {
            categoryInput.parentElement.style.backgroundColor = 'var(--color-redimmed)'
        }
     })
 })