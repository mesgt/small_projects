const panels = document.querySelectorAll('.panel');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive1) {
            circle.classList.add('active1')
        } else {
            circle.classList.remove('active1')
        }
    })

    const actives = document.querySelectorAll('.active1')

    progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%'

    if(currentActive1 === 1) {
        prev.disabled = true
    } else if(currentActive1 === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

let currentActive1 = 1

next.addEventListener('click', () => {
    currentActive1++
    if(currentActive1 > circles.length) {
        currentActive1 = circles.length
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive1--
    if(currentActive1 < 1) {
        currentActive1 = 1
    }

    update();
})