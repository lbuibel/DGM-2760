// Heading Info
document.querySelector('header > h1').innerText = "Hotel California"
document.querySelector('header > h2').innerText = "Check in Anytime You Like"

// Page Title
document.querySelector('#pageTitle').innerText = "Hotel California"


async function getHotelData() {
    try {
        const response = await fetch('hotel.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}

getHotelData().then(data => hotelData = data)

document.querySelector("#fourSeasons").addEventListener("click", hotelInfo);
document.querySelector("#theEmbassy").addEventListener("click", hotelInfo);
document.querySelector("#theGrand").addEventListener("click", hotelInfo);

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
      return event.target.id.toLowerCase() === hotel.name.toLowerCase().replace(/\s/g, '')
    });
    document.querySelector("#address").textContent = hotelChoice.address
    document.querySelector("#rooms").textContent = hotelChoice.rooms
    document.querySelector("#gym").textContent = hotelChoice.gym
    document.querySelector("#type").textContent = hotelChoice.roomTypes
    document.querySelector("#picture").src = hotelChoice.picture
  }