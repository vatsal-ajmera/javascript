function testFunctionOne() {
	console.log("This is simple function")
}

function testFunction(arg1, arg2) {
	console.log(`Argument1: ${arg1}, Argument2 ${arg2}`)
}

testFunctionOne()
testFunction('1',4)

// Anonymous function
let func = () => {
	console.log(`Hello from anonymous function`)
}
console.log(func())