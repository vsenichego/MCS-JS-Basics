const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
console.log(computer);

if (player > 2 || player < 0) {
    console.log('play by the rules!');
} else if ((player == 0 && computer == 1) ||
            ((player == 0 || player == 1) && computer == 2)) {
    console.log('computer win');
} else if (player == computer) {
    console.log('tie');
} else {
    console.log('player win');
}
// опишем все условия и будем выводить в консоль 'computer win' или 'player win'