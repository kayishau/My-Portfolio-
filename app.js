

$(() => {

// Jquery smooth scroll
// grabbing the links from the Nav bar
// adding an event listener and handler
// Created a smooth scroll function for all nav items, but was unable to figure out a dynamic way to write the code for the use of less functions


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


// Darkmode/Lightmode 

const darkMode = () => {
    $('html, section').toggleClass('dark-mode')
    if ($('html, section').hasClass('dark-mode')){
        $('.switch').attr('name', 'sunny')
    } else {
        $('.switch').attr('name', 'moon')
    }
}

$('.switch').on('click', darkMode)

// Slide in effect

const slideUp = () => {
    $('.proj').slideUp(1000)
}

$('#1').on('click', slideUp)

const slideToggle = () => {
    $('.proj').slideToggle(1200)
}

$('#4').on('click', slideToggle)


// Modal popup

const $form = $('.wrapper')

const openForm = () => {
    $form.css('display', 'block')
}

const closeForm = () => {
    $form.css('display', 'none')
}

$('#5').on('click', openForm)
$('#close-form').on('click', closeForm )



})