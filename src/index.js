// JS Goes here - ES6 supported

import "./css/style.scss";

// alert('Welcome, dear visitor 😬')

let body = document.body;
let checkThis = document.querySelector('.check-this');

checkThis.addEventListener('mouseover', function(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    body.style.setProperty('background-color', 'rgb('
    +r+ ',' +g+ ',' +b+ ')');
})

function rotate() {
    let all = document.body.querySelectorAll('*');
    let x = Math.floor(Math.random() * 40);

    for (each of all) {
        each.style.setProperty('transform', 'rotateZ(' +x+ 'deg)' );
    }
}

// setTimeout(function() {rotate()}, 3000); 

document.addEventListener('mousemove', rotate);
