const sounds = ['applause', 'fail', 'cheer', 'cow', 'bark', 'monkey', 'sad']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('button').appendChild(btn)
})