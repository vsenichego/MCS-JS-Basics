const divs = document.querySelectorAll('div');

console.log(divs);

for(let i = 0; i<divs.length; i++) {
    divs[i].style.backgroundImage = 'linear-gradient('+(45+i*30)+'deg, red, yellow)';
}