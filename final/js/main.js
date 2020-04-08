// Heading Info
document.querySelector('header > h1').innerText = "Moto Finder"
// document.querySelector('header > h2').innerText = "Check in Anytime You Like"

// Page Title
document.querySelector('#pageTitle').innerText = "Search For Motorcycles"




async function getMotoBrands () {
    try {
        const response = await fetch('moto_brands.json')
        return await response.json()
    } catch (error) {
        console.log(`${error} Has occured`)
    }
}

async function getMotoModels () {
    try {
        const response = await fetch('moto_models.json')
        return await response.json()
    } catch (error) {
        console.log(`${error} Has occured`)
    }
}

let motoBrands = {}
let motoModels = {}

getMotoBrands().then(data => motoBrands = data)
getMotoModels().then(data => motoModels = data)

// selected individual buttons (didn't use anchor tags)
document.querySelector("#ducati").addEventListener("click", brandInfo);
document.querySelector("#bmw").addEventListener("click", brandInfo);
document.querySelector("#triumph").addEventListener("click", brandInfo);

function brandInfo(event) {
    let brandChoice = motoBrands.data.find(brand => {
        return event.target.id ===  brand.name.toLowerCase()
    })
    let brandInfo = motoModels.data.filter(id => brandChoice.id === id.brand_id)
    console.log(brandChoice)
    console.log(brandInfo)
}


