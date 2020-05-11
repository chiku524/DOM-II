const rockets = document.querySelectorAll('.block');
let changedOrder = 0;
let max = 1500;
let xIndex = {
    "block--red": 0,
    "block--blue": 0,
    "block--green": 0,
    "block--pink": 0,
    "block--gray": 0
    };
var timer;

rockets.forEach(element => element.addEventListener('click', function(){
    changedOrder -= 1;
    element.style.order = changedOrder;
}))
rockets.forEach(element => element.addEventListener('mousedown', function(){
    timer = window.setInterval(function(){
        if(xIndex[element.classList[1]] === max){
            clearInterval(timer);
        } else {
            xIndex[element.classList[1]]++;
            gsap.to(element, {x: xIndex[element.classList[1]]});
        }
    }, 10);
}))

rockets.forEach(element => element.addEventListener('mouseup', function(){
    window.clearInterval(timer);
    var backTimer = window.setInterval(function(){
        if(xIndex[element.classList[1]] === 0){
            clearInterval(backTimer);
        } else {
            xIndex[element.classList[1]]--;
            gsap.from(element, {x: xIndex[element.classList[1]]});
            console.log(xIndex[element.classList[1]]);
        }
    }, 10)
}))
