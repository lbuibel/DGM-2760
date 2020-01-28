// Heading Info
document.querySelector('header > h1').innerText = "Pizza Emporium"
document.querySelector('header > h2').innerText = "Literal Objects"

// Page Title
document.querySelector('#pageTitle').innerText = "Pizza Order Form"

let message

const pizza = {
  crust: 'thin',
  size: 'small',
  topping: 'pepperoni',

  buildPizza: () => {
    message = `Bake a ${pizza.size}, ${pizza.crust} crust pizza, with ${pizza.topping} on top.`
    document.querySelector('#message').textContent = message
  },
  shoppingList: () => {
    let flower = 1
    if (pizza.crust === 'thick' || pizza.size === 'large') flower *= 2
    message = `You will need to buy ${flower} cup(s) of flower, and 1 package of ${pizza.topping}`
    document.querySelector('#message').textContent = message
  },
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#buildPizza').addEventListener('click', pizza.buildPizza)
document.querySelector('#shoppingList').addEventListener('click', pizza.shoppingList)
