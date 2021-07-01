const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            count--
        }
        else if(styles.contains('increase')) {
            count++
        }
        else if(styles.contains('reset')) {
            count = 0
        }
        value.textContent = count
    })

})