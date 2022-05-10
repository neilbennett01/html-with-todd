console.log("It is working")

function doStuff() {
    const cta = document.querySelector('.cta-button') //find any element that has the class "cta button and grab it"
    cta.style.display = 'none' //go to cta, set the display property in style to none

    let message = document.createElement('p'); //go to DOM, create a new paragraph element, p, 
    message.innerHTML = 'Your order has been placed!😀'; //Add this text to our new paragraph
    //find tht <section> tag, and add to the end our new paragraph
document.querySelector('section'). appendChild(message);
}