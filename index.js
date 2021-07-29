// Module wrapper function - you have this available in a module logic
// (function (exports, require, module, __filename, __dirname) {
//})

// const person = require('./person'); // method of importing called common JS
// //import Person from './person'; = Im ES6 method, but still not included in node
// console.log(person);
// console.log(person.name);
//
// const personFromClass = require('./personClass');
// const person1 =  new personFromClass('Ceco', 15);
// person1.greeting();
//
//
// console.log("Hello from Node.js");

const express = require('express');

const app = express();

const port = 5609;
app.listen(port, () => console.log(`Server started on port = ${port}`));