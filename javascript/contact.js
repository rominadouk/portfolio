$(() => {
//JQuery for Hamburger Menu
    $('.hamburgerMenu').on('click', function () {
        $('.nav__link').toggleClass('hide')
    })
 document.getElementById('contactSubmit').addEventListener('click', submitFeedback)

});


    
const submitFeedback = () => {
    const container = document.getElementById('contactInfoContainer')
    const feedback = document.createElement('p')
    const feedbackTxt = document.createTextNode('Form successfully submitted. Thank you!')
    feedback.appendChild(feedbackTxt)
    container.appendChild(feedback)
}