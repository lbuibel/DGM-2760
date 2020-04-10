// Heading Info
document.querySelector('header > h1').innerText = "Moto Finder"
// document.querySelector('header > h2').innerText = "Check in Anytime You Like"
// Page Title
document.querySelector('#pageTitle').innerText = "Schedule Service"

const motoContainer = document.querySelector('#moto-section')
let htmlSection = document.querySelector('#moto-section')



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

getMotoModels().then(data => motoModels = data)

let motoBrands = {}
let motoModels = {}
let brandArray = []

let brandChoice = null

getMotoBrands().then(data => {
    brandArray = data.data
    motoBrands = data


    brandSelect = document.getElementById('brands')
    modelSelect = document.getElementById('models')
    modelSelect.disabled = true

    for(var i = 0; i < brandArray.length; i++) {
        var brandOption = document.createElement('option')
        brandOption.innerHTML = brandArray[i].name
        brandOption.value = brandArray[i].name
        brandOption.className = "brand-option"
        brandSelect.appendChild(brandOption)
    }
    brandSelect.addEventListener('change', () => {
        modelSelect.disabled = false
        var x = document.getElementById("brands").selectedIndex;
        let brandChoice = this.document.getElementsByClassName("brand-option")[x - 1].value
        console.log(brandChoice)
        let brandPick = motoBrands.data.find(brand => {
            return brandChoice.toLowerCase() === brand.name.toLowerCase()
        })
        let brandModels = motoModels.data.filter(id => brandPick.id === id.brand_id)

        for(var i = 0; i < brandModels.length; i++) {
            var modelOption = document.createElement('option')
            modelOption.innerHTML = brandModels[i].name
            modelOption.value = brandModels[i].name
            modelOption.className = "model-option"
            modelSelect.appendChild(modelOption)
            }
            modelSelect.addEventListener('change', () => {
                var x = document.getElementById("models").selectedIndex;
                let modelChoice = this.document.getElementsByClassName('model-option')[x - 1].value
                console.log(modelChoice)
            })
        })
    
})





function getMotoInfo() {
    var x = document.getElementById("brands").selectedIndex;
    var brandSelect = document.getElementsByTagName("option")[x].value

    let brandChoice = motoBrands.data.find(brand => {
        return brandSelect.toLowerCase() === brand.name.toLowerCase()
    })
    let brandInfo = motoModels.data.filter(id => brandChoice.id === id.brand_id)
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


