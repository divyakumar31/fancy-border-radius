const outputRadius = document.querySelector('.radius-value');
const leftHandler = document.querySelector('#left');
const rightHandler = document.querySelector('#right');
const topHandler = document.querySelector('#top');
const bottomHandler = document.querySelector('#bottom');
const box = document.querySelector('.display-box');
var radius;
setBorder();
document.addEventListener('input', () => {
    setBorder();
})

function setBorder() {
    radius = topHandler.value + '% ' + (100 - topHandler.value) + '% ' + (100 - bottomHandler.value) + '% ' + bottomHandler.value + '% ' + '/ ' + leftHandler.value + '% ' + rightHandler.value + '% ' + (100 - rightHandler.value) + '% ' + (100 - leftHandler.value) + '%';
    outputRadius.innerHTML = "border-radius: " + radius + ";";
    box.style.borderRadius = radius;
}