function duplicateMenu() {
    // get all of anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create new list items for bottom nav
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        // new list for bottom nav with corresponding elements
        let newUl = document.createElement('ul')
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')

        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLI.appendChild(newLink)
        document.querySelector('#smallNavArea').appendChild(newUl)
        newUl.appendChild(newLI)
        newLink.textContent = menuItem.innerText
    })
}

duplicateMenu()