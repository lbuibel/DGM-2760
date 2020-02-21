// Heading Info
document.querySelector('header > h1').innerText = "Hotel California"
document.querySelector('header > h2').innerText = "Check in Anytime You Like"

// Page Title
document.querySelector('#pageTitle').innerText = "Hotel California"



async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json()

    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}

getHotelData().then(data => hotelData = data)

document.querySelector("#fourSeasons").addEventListener("click", hotelInfo);
document.querySelector("#embassy").addEventListener("click", hotelInfo);
document.querySelector("#theGrand").addEventListener("click", hotelInfo);

function hotelInfo(event) {
    let userChoice = hotelData.hotels.find(hotel => {
      return event.target.id == hotel.name.toLowerCase();
    });
    document.querySelector("#address").textContent = `Address: ${userChoice.address}`;
    document.querySelector("#rooms").textContent = userChoice.rooms;
    document.querySelector("#gym").textContent = userChoice.gym;
    document.querySelector("#type").textContent = userChoice.roomTypes;
    document.querySelector("#picture").src = userChoice.picture;
  }