// Heading Info
document.querySelector('header > h1').innerText = "The Arborist"
document.querySelector('header > h2').innerText = "Build your Garden"

// Page Title
document.querySelector('#pageTitle').innerText = "The Arborist"

// ----------- Tree List ------------

const trees = ['Eucalyptus', 'Birch', 'Spruce', 'Fir']

const error = document.querySelector('#error')
const results = document.querySelector('#results')
const length = document.querySelector('#list-length')


// Displaying the tree list within the results section
const treeList = () => {
    let selectionList = ''
    trees.forEach(tree => {
        selectionList += `${tree}<br>`
    })
    listLength = trees.length
    results.innerHTML = selectionList
    length.innerText =  `${listLength} elements long`
}

treeList()

// Adding trees to list
document.querySelector('#add_aspen').onclick = () => {
    trees.push('Aspen')
    treeList()
}

document.querySelector('#add_maple').onclick = () => {
    trees.push('Maple')
    treeList()
}

document.querySelector('#add_oak').onclick = () => {
    trees.unshift('Oak')
    treeList()
}

// Removing Trees from list
document.querySelector('#remove_first').onclick = () => {
    if (trees.length >= 1){
        trees.splice(0, 1)
        treeList()  
    } else {
        console.log('test')
        error.innerText = "No remaining trees to remove"
    }
}

document.querySelector('#remove_second').onclick = () => {
    if (trees.length < 2){
        error.innerText = "No second list item to remove"
    } else {
        trees.splice(1, 1)
        treeList()
    }
}
document.querySelector('#remove_last').onclick = () => {
    if (trees.length < 1) {
        error.innerText = "No remaining trees to remove"
    } else
    trees.pop()
    treeList()
}

// Sorting the Array
document.querySelector('#sortTrees').onclick = () => {
    if (trees.length < 1){
        error.innerText = "No trees to sort"
    } else {
        // trees.sort()
        trees.sort((a, b) => {
            return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
          });
        treeList()
    }
}

// changing to lower case
document.querySelector('#lowerCase').onclick = () => {
    if (trees.length < 1){
        error.innerText = "No trees in list to make lower-case"
    }
    else {
        let selectionList = []
        selectionList = trees.map(tree => tree.toLowerCase())
        trees.splice(0, selectionList.length, ...selectionList)
        treeList()
    }
}

// showing specific names from the array
document.querySelector('#showName3').onclick = () => {
    if (trees.length < 3){
        error.innerText = "Not enough items in the array to display name"
    } else {
        error.innerText = trees[2]
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length < 4){
        error.innerText = "Not enough items in the array to display name"
    } else {
        error.innerText = trees[3]
    }
}
