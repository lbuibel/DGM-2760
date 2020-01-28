// Heading Info
document.querySelector('header > h1').innerText = "Nonesense Story"
document.querySelector('header > h2').innerText = "String Manipulation"

// Page Title
document.querySelector('#pageTitle').innerText = "The Tale of the Haunted House"


let story = document.querySelector("#story");

function tellStory() {
  nounArray = document.querySelector("#noun")
    .value.toLowerCase()
    .split(/\s*[,\n." "]+\s*/);

  console.log(nounArray);
  adjectivesArray = document.querySelector("#adjectives")
    .value.toLowerCase()
    .split(/\s*[,\n." "]+\s*/);

  console.log(adjectivesArray);
  verbArray = document.querySelector("#verbs")
    .value.toLowerCase()
    .split(/\s*[,\n." "]+\s*/);

  console.log(verbArray);
  const myStory = 
  `Once up a time there was <span>${adjectivesArray[0]}</span> <span>${nounArray[0]}</span> who liked to <span>${verbArray[0]}</span> near a haunted house at the end of the lane.
   The house was haunted by <span>${nounArray[1]}'s</span> <span>${nounArray[2]}'s</span> and <span>${nounArray[3]}'s</span>.
   Once on a lovely <span>${adjectivesArray[1]}</span> day, the <span>${nounArray[0]}</span> saw a <span>${nounArray[4]}</span> outside of the house <span>${verbArray[1]}ing</span> a <span>${adjectivesArray[2]}</span> <span>${nounArray[5]}</span>.
   The <span>${nounArray[0]}</span> grabbed their <span>${nounArray[6]}</span> and decided to <span>${verbArray[2]}</span> away from the house, never to come back again.`;

  const output = document.querySelector("#story");
  output.innerHTML = myStory;
}