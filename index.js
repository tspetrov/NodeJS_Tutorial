const person = require('./person');
console.log(person);
console.log(person.name);

const personFromClass = require('./personClass');
const person1 =  new personFromClass('Ceco', 15);
person1.greeting();


console.log("Hello from Node.js");