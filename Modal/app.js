const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modalEl = document.querySelector('.modal-overlay')

modalBtn.addEventListener('click', () => {
    modalEl.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
    modalEl.classList.remove('open-modal')
})