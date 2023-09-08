// Script for navigation bar

var bar = document.getElementById('bar');
var clos = document.getElementById('clos');
var nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active')
    })
}

if (clos) {
    clos.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}
