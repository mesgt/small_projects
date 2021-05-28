const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        //identify x and y coordinates on page
        const x = e.clientX
        const y = e.clientY
        //offset for button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        //target specific position within button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle) //arrow function won't work with 'this'
        //remove excess circles after clicking. 
        setTimeout(() => circle.remove(), 500)
    })
})