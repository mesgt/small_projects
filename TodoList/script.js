const form = document.getElementById('form')
const todosUL = document.getElementById('.todos')
const input = document.getElementById('.input')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

