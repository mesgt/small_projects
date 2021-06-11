const images = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

console.log(img)

let idx = 0
let interval = setInterval(run, 2000)

function run() {
    idx++

    changeImg()
}

function changeImg() {
    if(idx > img.length-1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
    idx--
    changeImg()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx++
    changeImg()
    resetInterval()
})