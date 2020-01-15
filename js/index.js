// Your code goes here

//#1
const logoHead = document.querySelector('.logo-heading');

logoHead.addEventListener('mouseover', function(){
logoHead.style.color = 'red'
});

//#2
logoHead.addEventListener('mouseout', function(){
    logoHead.style.color = 'black'
    });

//#3
const img = document.querySelector('.intro img');

img.addEventListener('click', function(){
    img.src = "img/pirate.jpg"
});
//#4
img.addEventListener('dblclick', function(){
    img.src = "img/fun-bus.jpg"
});

//#5

window.addEventListener('contextmenu', function(x){
alert('my husband never clicks me that way')
});

// #6
const body = document.querySelector('body');
const nav = document.querySelector('.main-navigation');
body.addEventListener('keydown', function(){
    nav.style.position = "absolute"
});

//#7
body.addEventListener('keypress', function(){
    nav.style.position = 'fixed'
});

//#8
body.addEventListener('copy', function(x){
    alert(`You copied something`)
});

//#9

window.addEventListener('load', function(){
window.prompt('Who goes there?');
});


//#10

const lastOne = document.querySelector('body');
 
x = ['green', 'purple', 'crimson', 'aqua'];
let random = x[Math.floor(Math.random() * x.length)];

window.addEventListener('scroll', function(){
    lastOne.style.color = random;
});


//prevent default and stop prop
const preventA = document.querySelectorAll('a');

preventA.forEach(function(a){
    a.addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
    });
});


const navTwo = document.querySelector('.main-navigation');

navTwo.addEventListener('click', function(event){
    alert('main-nav')
})