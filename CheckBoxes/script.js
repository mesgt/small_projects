const toggles = document.querySelectorAll('.toggle')
const cheap = document.getElementById('cheap')
const good = document.getElementById('good')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(clickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === clickedOne) {
            cheap.checked = false
        }

        if(cheap === clickedOne) {
            good.checked = false
        }
        
        if(fast === clickedOne) {
            good.checked = false
        }
    }
}