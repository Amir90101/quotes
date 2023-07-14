let btn = document.querySelector(`button`)
let quot = document.querySelector(`#quote`)
async function makeQuery(){
    let response = await fetch(`https://dummyjson.com/quotes`)
    let {quotes} = await response.json()
    return quotes
}
async function showQoute(){
    quot.innerHTML = ``
    let quotes = await makeQuery()
    let random = Math.round(Math.random()*41)
    let p = document.createElement(`p`)
    p.innerHTML = `${quotes[random].quote}`
    quot.appendChild(p)
}
btn.addEventListener(`click`, showQoute)