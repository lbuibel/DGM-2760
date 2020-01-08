document.querySelector('header > h1').innerText = "Ski Lodge Bed and Breakfast"

document.querySelector('header > h2').innerText = "Hit the slopes with ease!"

document.querySelector('#pageTitle').innerText = "Plan Your Trip"

let date = new Date().toLocaleDateString()

document.getElementById('date').innerHTML = `Today is ${date}`

let name = window.prompt("What is your first name?")

document.getElementById('greeting').innerHTML = `Hello ${name}! wecome to the Ski Lodge Bed and Breakfast`