const rockets = document.querySelectorAll('.block');
const rocketsDiv = document.querySelector('.blocks');

rockets.forEach(element => element.addEventListener('click', function(){
    element.parentNode.insertBefore(element, rockets[0]);
}));

console.log(rockets);