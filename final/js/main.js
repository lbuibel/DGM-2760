// Heading Info
document.querySelector('header > h1').innerText = "Moto Finder"
// document.querySelector('header > h2').innerText = "Check in Anytime You Like"
// Page Title
document.querySelector('#pageTitle').innerText = "Select Motorcycle Manufacturer"

const motoContainer = document.querySelector('#moto-section')



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
let brandArray = []

getMotoBrands().then(data => {
    brandArray = data.data
    var sel = document.querySelector('#dropDown');
    for(var i = 0; i < brandArray.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = brandArray[i].name;
    opt.value = brandArray[i];
    sel.appendChild(opt);
}
    motoBrands = data
})

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
    let brandNames = motoBrands.data.map(i => i.name)
    console.log(brandChoice)
    console.log(brandNames)
    htmlSection = document.querySelector('#moto-section')
    printMotos(brandInfo, brandChoice, htmlSection)
}

function printMotos(array, brand, section) {
    let listCard = document.createElement('div')
    listCard.className = "moto-card"

    let listTitle = document.createElement('h3')
    listTitle.textContent = brand.name

    let modelList = document.createElement('ul')

    array.forEach(moto => {
        let listItem = document.createElement('li')
        listItem.textContent = moto.name
        modelList.appendChild(listItem)
    })
    listCard.appendChild(listTitle)
    listCard.appendChild(modelList)
    section.appendChild(listCard)
}


