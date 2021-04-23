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
} else if ((player === rock && computer === scissors) || (player === paper && computer === rock)
	|| (player === scissors && computer === paper)) {
	console.log('player win')	
} else if (player === computer) {
	console.log('tie');
} else {
	console.log('computer win')
}
// опишем все условия и будем выводить в консоль 'computer win' или 'player win'