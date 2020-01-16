// Heading Info
document.querySelector('header > h1').innerText = "Fortune Teller"
document.querySelector('header > h2').innerText = "Learn Your Fate"

// Page Title
document.querySelector('#pageTitle').innerText = "The Fortune Teller"

// ----------- Fortune ------------

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function getMonth(month) {
    let monthName
    switch (month) {
        case 1:
            monthName = "January"
            break;
        case 2:
            monthName = "Febuary"
            break;
        case 3:
            monthName = "March"
            break;
        case 4:
            monthName = "April"
            break;
        case 5:
            monthName = "May"
            break;
        case 6:
            monthName = "June"
            break;
        case 7:
            monthName = "July"
            break;
        case 8:
            monthName = "August"
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December"
            break;
        default:
            monthName = "Not a Month"
            break;
    }
    return monthName
  }

  function getFortune(fate) {
      let message
      switch (fate) {
        case 1:
            message = "you will not be able to use the internet for the entire day"
            break;
        case 2:
            message = "all of your shirts will be two sizes two small"
            break;
        case 3:
            message = "you will wake up and not know where you are"
            break;
        case 4:
            message = "you will find a $10 dollar bill in you pocket"
            break;
        case 5:
            message = "all of your wildest dreams will come true"
            break;
          default:
            message = "sorry no fortune for you"
            break;
      }
      return message
  }

  let month = getRandomInt(1,12)
  let fate = getRandomInt(1, 5)
  let day = getRandomInt(1, 28)

  const monthName = getMonth(month)
  const userFate = getFortune(fate)

  const userFortune = `On ${monthName} ${day}, ${userFate}`

  document.querySelector('#fortune').innerText = userFortune