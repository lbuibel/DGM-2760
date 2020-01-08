// Heading Info
document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "The greater the odds the greater the challange!"

// Page Title
document.querySelector('#pageTitle').innerText = "Detective Services"


// Window and URL information
function display() {
    let windowSize = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} tall`
    let windowOffset = `Window offset is ${window.screenX} from the left and ${window.screenY} from the top.`
    let pageURL = `Page URL is ${window.location}`

    let pageInfo = document.getElementById("pageInfo").innerText = `${windowSize} \n ${windowOffset} \n ${pageURL}`
}
display()

document.getElementById('lastUpdate').innerText = new Date(document.lastModified)
