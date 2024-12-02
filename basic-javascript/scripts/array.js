const array = ['user1', 'user2', 'user3', 'user4', 'user5'];


// console.log(array.length) - to get length
// console.log(array.toString()) - to get string from array
// console.log(array.at(2)) - to get specific value from array
// console.log(array.join('-')) - convert array to string using expression
// console.log(array.pop()) - get last Element of array
// console.log(array.push('user6')) - push element to end of array

// console.log(array.shift()) - remove first Element of array
// console.log(array.unshift('user6')) - //add Element to start of array
// console.log(array)


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys)
// console.log(myChildren)

const arrayNew = array.copyWithin(2,3)
console.log(array)
console.log(arrayNew)