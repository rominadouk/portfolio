

$(() => {

    $('.hamburgerMenu').on('click', function () {
        $('.nav__link').toggleClass('hide')
    })

    document.getElementById('spotImg1ID').addEventListener('mouseover', makeOverlay1, false)
    document.getElementById('spotImg1ID').addEventListener('mouseout', removeOverlay1)
    document.getElementById('spotImg2ID').addEventListener('mouseover', makeOverlay2, false)
    document.getElementById('spotImg2ID').addEventListener('mouseout', removeOverlay2)
    document.getElementById('spotImg3ID').addEventListener('mouseover', makeOverlay3, false)
    document.getElementById('spotImg3ID').addEventListener('mouseout', removeOverlay3)

});

//FUNCTIONS TO MOUSEOUT ON OVERLAYS

const removeOverlay1 = () => {
    const spotImg1 = document.getElementById('spotImg1ID')
    const overlay1 = document.getElementById('overlay1')
    spotImg1.removeChild(overlay1)

}

const removeOverlay2 = () => {
    const spotImg2 = document.getElementById('spotImg2ID')
    const overlay2 = document.getElementById('overlay2')
    spotImg2.removeChild(overlay2)
}
const removeOverlay3 = () => {
    const spotImg3 = document.getElementById('spotImg3ID')
    const overlay3 = document.getElementById('overlay3')
    spotImg3.removeChild(overlay3)
}


//make a div give it an ID of "overlay1" and class of 'overlays' appedn it to the div of the img ex:sptImg1
//make a 'p' add the title append it to overlay Id
//make another 'p' add a short description ex: 'a project made with html css and javascript'
//append second p to the overlay
//give overlay an opacity
//add an event listener to sptImg1 say on hover, run this function 
const makeOverlay1 = () => {
    const overlay1 = document.createElement('div')
    
    overlay1.setAttribute('id','overlay1')
    overlay1.className = 'overlays'
    const spotImg1 = document.getElementById('spotImg1ID')
    spotImg1.appendChild(overlay1)

    const title = document.createElement('p')
    const titleTxt = document.createTextNode('Landscaper')
    title.appendChild(titleTxt)
    overlay1.appendChild(title)
    const description = document.createElement('p')
    const descriptionTxt = document.createTextNode('Mini Game made with HTML, CSS, JavaScript')
    description.appendChild(descriptionTxt)
    overlay1.appendChild(description)
    overlay1.style.color = 'white'
    overlay1.style.background = 'rgba(0,0,0, .6)'
    overlay1.style.height= '220px'

}
//CREATE HOVER TEXT/OVERLAY FOR IMG2

const makeOverlay2 = () => {

    const overlay2 = document.createElement('div')
    overlay2.setAttribute('id', 'overlay2')
    overlay2.className ='overlays'
    const spotImg2 = document.getElementById('spotImg2ID')
    spotImg2.appendChild(overlay2)

//creating and appending text
    const title = document.createElement('p')
    const titleTxt = document.createTextNode('SpaceBattle')
    title.appendChild(titleTxt)
    overlay2.appendChild(title)
    const description = document.createElement('p')
    const descriptionTxt = document.createTextNode('Mini termal game created with Javascript')
    description.appendChild(descriptionTxt)
    overlay2.appendChild(description)
//css styles for text
    overlay2.style.color="white"
    overlay2.style.background = 'rgba(0,0,0, .6)'
    overlay2.style.height= '220px'
    
}

const makeOverlay3 = () => {
    const overlay3 = document.createElement('div')
    overlay3.setAttribute('id', 'overlay3')
    overlay3.className='overlays'
    const spotImg3 = document.getElementById('spotImg3ID')
    spotImg3.appendChild(overlay3)

    const title = document.createElement('p')
    const titleTxt = document.createTextNode('Lord Of The Rings')
    title.appendChild(titleTxt)
    overlay3.appendChild(title)
    const description = document.createElement('p')
    const descriptionTxt = document.createTextNode('Mini simulation Lord of the Rings created with jQuery and JavaScript')
    description.appendChild(descriptionTxt)
    overlay3.appendChild(description)
    //css syles for text
    overlay3.style.color="white"
    overlay3.style.background = 'rgba(0,0,0, .6)'
    overlay3.style.height= '220px'
    


}