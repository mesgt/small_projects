const result = document.getElementById('result')
const filter = document. getElementById('filter')

const listItems = []

getData()


async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()
    
    //clear 'Loading...'
    result.innerHTML = ''

    results.forEach(user => {
        const img = user.picture.large
        const name_first = user.name.first
        const name_last = user.name.last
        const city = user.location.city
        const country = user.location.country

        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src="${img}" alt="${name}">
        <div class="user-info">
            <h4>${name_first}  ${name_last} </h4>
            <p>${city}, ${country}</p>
        </div>
        `
        result.appendChild(li)
    })
    
}

