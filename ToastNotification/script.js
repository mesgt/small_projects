const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
    'Message Seven and more'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    console.log(123)
}
