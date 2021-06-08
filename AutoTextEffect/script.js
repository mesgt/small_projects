const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I like to move it move it. We like to move it move it. They like to MOVE IT!'
let idx = 1
let speed = 200/speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 200 / e.target.value
})