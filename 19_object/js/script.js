let person = {
	name : "Sasha",
	surname : "Vasin",
	age : 50,
	teacher : false,
	sayHello : function() { return 'Hello ' + this.name}
}

console.losg(person.name);
console.log(person.sayHello());

person.canCode = true;

console.log(person)

person.age = 13;

console.log(person['surname'])