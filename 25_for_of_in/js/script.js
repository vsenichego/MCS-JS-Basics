const buttons = document.querySelectorAll('button');

// for(key in buttons) {
//     buttons[key].style.backgroundColor = 'lightblue';
// }

for(button of buttons) {
    button.style.backgroundColor = 'lightblue';
}

let person = {
    name : 'Andrey',
    surname : 'Govorun',
    teacher : false
}

for(key in person) {
    console.log(person[key]);
}