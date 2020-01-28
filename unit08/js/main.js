// Heading Info
document.querySelector('header > h1').innerText = "Grants Tomb"
document.querySelector('header > h2').innerText = "Literal Objects"

// Page Title
document.querySelector('#pageTitle').innerText = "Grants Tomb"

const question = {
    stem: "Who is buried in Grants Tomb?",
    option1: "Julian",
    option2: "Alex",
    option3: "Grant",
    option4: "Luis",
    correct: 3,
    display: () => {
      document.querySelector('#stem').textContent = question.stem
      document.querySelector('#answer1').textContent = question.option1
      document.querySelector('#answer2').textContent = question.option2
      document.querySelector('#answer3').textContent = question.option3
      document.querySelector('#answer4').textContent = question.option4
    },
    checkAnswer: (choice) => {
      if (choice === question.correct) {
        document.querySelector(".feedback").textContent = "Correct!"
      } else {
        document.querySelector(".feedback").textContent = "Incorrect, try again."
      }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.checkAnswer(1))
document.querySelector('#answer2').addEventListener('click', () => question.checkAnswer(2))
document.querySelector('#answer3').addEventListener('click', () => question.checkAnswer(3))
document.querySelector('#answer4').addEventListener('click', () => question.checkAnswer(4))

question.display()