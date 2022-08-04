/**
 * Категории меню
 */
const categoryInputs = document.querySelectorAll('.foods__category__input')
categoryInputs.forEach(categoryInput => {
    categoryInput.addEventListener('change', () => {
        const inputCategory = categoryInput.getAttribute('name')
        const servings = document.querySelectorAll('.foods__serving')

        if (inputCategory != 'all') { // если выбрана одна из категорий
            servings.forEach(serving => {
                const category = serving.getAttribute('data-category')
                if (category != inputCategory) {
                    serving.classList.add('hide')
                }
                else {
                    serving.classList.remove('hide')
                }
            });
        }
        else { // если выбраны все категории
            servings.forEach(serving => {
                serving.classList.remove('hide')
            });
        }
    })
})



 /**
  * Оверлей
  */
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(openModalButton => {
    openModalButton.addEventListener('click', () => {
        const modal = document.querySelector(openModalButton.dataset.modalTarget)
        const pic = openModalButton.querySelector('.serving__pic').getAttribute('src')
        const name = openModalButton.querySelector('.serving__name').innerHTML
        const desc = openModalButton.querySelector('.serving__desc').innerHTML
        const weight = openModalButton.querySelector('.serving__weight').innerHTML
        const price = openModalButton.querySelector('.serving__price').innerHTML
        openModal(modal, {
            pic: pic,
            name: name,
            desc: desc,
            weight: weight,
            price: price
        })
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal, data) {
    if (modal == null) return

    modal.classList.add('active')
    modal.querySelector('.modal__pic').setAttribute('src', data.pic)
    modal.querySelector('.modal__name').innerHTML = data.name
    modal.querySelector('.modal__desc').innerHTML = data.desc
    modal.querySelector('.modal__weight').innerHTML = data.weight
    modal.querySelector('.modal__price').innerHTML = data.price
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return

    modal.classList.remove('active')
    overlay.classList.remove('active')
}