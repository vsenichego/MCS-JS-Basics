let people = ['Vasya', 'Andrey', 'Igor']

console.log(people[1]);

people[1] = 'Yura'
console.log(people[1]);

console.log(people.length);


let bigArray = [
	[1,2,3],
	[true, false],
	['a', 'b', 'c']
]

console.log(bigArray[0])

let bigObject = {
  names: ['Vasya', 'Petya', 'Sasha'],
  grades : [
    {
      intern: 1,
      junior: 2
    },
    {
      middle: 3,
      senior: 2
    }
  ]
}
console.log(bigObject.names[1]);
console.log(bigObject.grades[1].middle);