const body = document.body;
const page = document.querySelector('.page');
const name = document.querySelector('.name');
const image = document.querySelector('img');
const paragraph = document.querySelector('.short-bio');

console.log(paragraph);

body.style.backgroundColor = '#696969';
page.style.backgroundColor = 'ghostwhite';
name.textContent = 'DJ RASHAD';
image.setAttribute('src', 'https://i1.sndcdn.com/avatars-000002286578-qhhyhx-t500x500.jpg');
paragraph.className += ' .animated';