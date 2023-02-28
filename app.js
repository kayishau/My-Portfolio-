

$(() => {

// Jquery smooth scroll
// grabbing the links from the Nav bar
// adding an event listener and handler



const pgScroll1 = () => {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 800)
}

const pgScroll2 = () => {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800)
}


const pgScroll3 = () => {
    $('html, body').animate({
        scrollTop: $('#resume').offset().top
    }, 800)
}


const pgScroll4 = () => {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 800)
}


$('#4').on('click', pgScroll4 )

$('#3').on('click', pgScroll3 )



$('#2').on('click', pgScroll2 )


$('#1').on('click', pgScroll1 )



})