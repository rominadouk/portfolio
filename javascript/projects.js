$(() => {
    //JQuery for Hamburger Menu
        $('.hamburgerMenu').on('click', function () {
            $('.nav__link').toggleClass('hide')
        })
    
        document.getElementById('item1').addEventListener('click', createItem1Text)
        document.getElementById('item2').addEventListener('click', createItem2Text)
        document.getElementById('item3').addEventListener('click', createItem3Text)
        document.getElementById('item4').addEventListener('click', createItem4Text)
    
    
    });

    const createItem1Text = () => {

        const item1container = document.getElementById('item1Txt')
        item1container.replaceChildren()

        const h2 = document.createElement('h2')
        h2.className = 'projectName'
        const h2Text = document.createTextNode('LANDSCAPER')
        h2.appendChild(h2Text)
        //append the h2 to the div item1container
        item1container.appendChild(h2)
        //create h3 and append
        const h3 = document.createElement('h3')
        const h3Text = document.createTextNode('Language Used: HTML, CSS, Javascript')
        h3.className='languageUsed'
        h3.appendChild(h3Text)
        item1container.appendChild(h3)
        //create the description text and append it
        const description = document.createElement('p')
        const descriptionText = document.createTextNode('Nec feugiat nisl pretium fusce id. Fringilla ut morbi tincidunt augue. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.')
        description.appendChild(descriptionText)
        item1container.appendChild(description)
    
    }
    const createItem2Text = () => {
        const item1container = document.getElementById('item1Txt')
        item1container.replaceChildren()

        const h2 = document.createElement('h2')
        h2.className = 'projectName'
        const h2Text = document.createTextNode('SPACEBATTLE')
        h2.appendChild(h2Text)
        //append the h2 to the div item1container
        item1container.appendChild(h2)
        //create h3 and append
        const h3 = document.createElement('h3')
        const h3Text = document.createTextNode('Language Used: Javascript')
        h3.className='languageUsed'
        h3.appendChild(h3Text)
        item1container.appendChild(h3)
        //create the description text and append it
        const description = document.createElement('p')
        const descriptionText = document.createTextNode('Nec feugiat nisl pretium fusce id. Fringilla ut morbi tincidunt augue. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.')
        description.appendChild(descriptionText)
        item1container.appendChild(description)
    
    }

    const createItem3Text = () => {
        const item1container = document.getElementById('item1Txt')
        item1container.replaceChildren()

        const h2 = document.createElement('h2')
        h2.className = 'projectName'
        const h2Text = document.createTextNode('DARK')
        h2.appendChild(h2Text)
        //append the h2 to the div item1container
        item1container.appendChild(h2)
        //create h3 and append
        const h3 = document.createElement('h3')
        const h3Text = document.createTextNode('Language Used: JavaScript')
        h3.className='languageUsed'
        h3.appendChild(h3Text)
        item1container.appendChild(h3)
        //create the description text and append it
        const description = document.createElement('p')
        const descriptionText = document.createTextNode('Nec feugiat nisl pretium fusce id. Fringilla ut morbi tincidunt augue. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.')
        description.appendChild(descriptionText)
        item1container.appendChild(description)

    }

    const createItem4Text = () => {
        const item1container = document.getElementById('item1Txt')
        item1container.replaceChildren()

        const h2 = document.createElement('h2')
        h2.className = 'projectName'
        const h2Text = document.createTextNode('LORD OF THE RINGS - MOST RECENT')
        h2.appendChild(h2Text)
        //append the h2 to the div item1container
        item1container.appendChild(h2)
        //create h3 and append
        const h3 = document.createElement('h3')
        const h3Text = document.createTextNode('Language Used: JavaScript/jQuery')
        h3.className='languageUsed'
        h3.appendChild(h3Text)
        item1container.appendChild(h3)
        //create the description text and append it
        const description = document.createElement('p')
        const descriptionText = document.createTextNode('Nec feugiat nisl pretium fusce id. Fringilla ut morbi tincidunt augue. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.')
        description.appendChild(descriptionText)
        item1container.appendChild(description)

    }