// Your code goes here

//click, mouseover, mouseout, keydown, wheel on buttons
const buttons = document.querySelectorAll('.content-pick .destination .btn');

buttons.forEach(element => element.addEventListener('click', function(){
    element.innerHTML = `I've been clicked!`;
}));
buttons.forEach(element => element.addEventListener('mouseover', function(){
    element.innerHTML = `Move mouse!`;
}));
buttons.forEach(element => element.addEventListener('mouseout', function(){
    element.innerHTML = `Sign Me Up!`
}));

//wheel on buttons[2]
buttons[2].addEventListener('wheel', wheel);
function wheel(){
    buttons[2].style.backgroundColor = 'black';
}

//double click on funBus image
const funBus = document.querySelector('.home img');
funBus.addEventListener('dblclick', dub);
function dub(){
    funBus.style.display = 'none';
}

//keydown on contentDestination
const contentDestination = document.querySelector('.content-destination');

//contentDestination.addEventListener('keydown', keyDown);          ... didn't work for some reason
document.body.addEventListener('keydown', keyDown);                 //this worked though
function keyDown(){
    contentDestination.style.display = 'none';
}

//keyup on contentDestination
document.body.addEventListener('keyup', keyUp);
function keyUp(){
    contentDestination.style.display = 'block';
}

//load on image
const image = document.querySelector('img');

image.addEventListener('load', loadImage);
function loadImage(){
    alert('Images are loaded');
}

//scroll on document, changes navbar background color
const navBar = document.querySelector('.nav-container');
document.addEventListener('scroll', scroll);
function scroll(){
    navBar.style.backgroundColor = 'purple';
}

//select on input text
const changeMe = document.querySelector('.changeMe');
const inputText = document.getElementsByClassName('input');
inputText[0].addEventListener('select', select);
function select(){
    changeMe.innerHTML = `You've selected some text!`;
}

//focusout on input field
inputText[0].addEventListener('focusout', focusOut);
function focusOut(){
    changeMe.innerHTML = 'Hello World! I have been focused out!';
}

//resize on contentDestinationH2
const contentDestinationH2 = document.querySelector('.content-destination h2');
window.addEventListener('resize', resize);
function resize(){
    contentDestinationH2.innerHTML = 'This window has been resized!';
}

//stop propogation on nested events
const bottomSection = document.querySelector('.content-pick');
bottomSection.addEventListener('click', myFunc1);
function myFunc1(){
    alert('bottomSection was clicked');
}
buttons[0].addEventListener('click', myFunc2);
function myFunc2(){
    alert('button[0] was clicked');
}
buttons[1].addEventListener('click', myFunc3);
function myFunc3(event){
    event.stopPropagation();
    alert('button[1] was clicked with stop propogation');
}

//preventDefault on nav items
const navItems = document.querySelectorAll('.nav-container nav a');
navItems.forEach(item => item.addEventListener('click', function(event){
    event.preventDefault();
}))

//GSAP
gsap.to('.destination', {transformOrigin: '50% 50%'});
gsap.to('.destination', {duration: 10, backgroundColor: 'purple', border: '2px solid grey', borderRadius: 5, ease: 'elastic', rotation: 360, stagger: 0.25});



//focus on contentDestination
// buttons[1].addEventListener('focus', focus);
// function focus(){
//     buttons[1].style.backgroundColor = 'black';
// }

//keydown on bottomSection... not working
// const bottomSection = document.querySelectorAll('.destination');
// bottomSection.forEach(element => element.addEventListener('keydown', function(){
//     element.style.backgroundColor = 'black';
// }));

//console.log(bottomSection);