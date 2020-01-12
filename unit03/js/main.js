// Heading Info
document.querySelector('header > h1').innerText = "Guessing Game"
document.querySelector('header > h2').innerText = "Guess the random number"

// Page Title
document.querySelector('#pageTitle').innerText = "High / Low Guessing Game"

// ----------- Game ------------
let correctNumber = Math.floor(Math.random() * 15)
correctNumber++

let totalGuesses = 0;
let userGuess = 0
let hasGuessed = false

console.log(`Correct number: ${correctNumber}`)

function guess() {
    totalGuesses ++
    userGuess = document.querySelector('#userGuess').value

    const feedback = document.querySelector('#feedback')

    if (userGuess == correctNumber) {
        feedback.innerText = `Correctomundo`
        award()
    } else if (userGuess > correctNumber && userGuess < 16){
        feedback.innerText = `Too high, try again.`
    } else if (userGuess < correctNumber && userGuess > 0){
        feedback.innerText = `Too low, try again.`
    } else {
        feedback.innerText = `Please select number between 1 and 15`
        totalGuesses--
    }

    document.querySelector('#tries').innerText = totalGuesses
}

function award() {
    let imgPath = '#'
    switch(totalGuesses){
        case 1:
        case 2:
        case 3:
            imgPath = 'images/first.png'
            break;
        case 4:
        case 5:
        case 6:
            imgPath = 'images/second.png'
            break;
        default:
            imgPath = 'images/third.png'
    }
    const awardImg = document.createElement('img')
    awardImg.setAttribute('src', imgPath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImg)
    // only append child if the ribbon element doen not have any child nodes yet
}
