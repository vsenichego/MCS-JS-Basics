let myFunc = function(element, color) {
    element.style.backgroundColor = color;
}

const heading = document.querySelector('h1');
const par = document.querySelector('p');

myFunc(heading, 'red');
myFunc(par, 'green');