const form = document.getElementById('form')
const todosUL = document.getElementById('todos')
const input = document.getElementById('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }
    console.log(todoText)
}