// variables:

// Bofere ES6 var is allowed us to define variables again if its already defined. 
// var name = "Hello Vatsal!"
// var name = "Ricky Johnson!"
// console.log(name)

// After ES6, let and const are introduced to declare variables.
let name = "Hello Vatsal!"
// it will be prompt an error because we can not redefine variables using let.
//let name = "Ricky Johnson!" // Uncaught SyntaxError: Identifier 'name' has already been declared.
name = "Ricky Johnson!" // instead of define if again we can just assign new value to variable.
console.log(name)