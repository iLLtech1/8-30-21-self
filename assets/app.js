// const adder = (a, b) => {
//   return a + b
// }

// console.log(adder(5, 7))

// const subtr = (a, b) => {
//   return a - b 
// }

// console.log(subtr(10, 5))

// const multi = (a, b) => {
//   return a * b 
// }

// console.log(multi(5, 10))

// const pow = (a, b) => {
//   return a ** b
// }

// console.log(pow(50, 2))

// console.log(typeof(pow))

// pow is not a var but a function because of =>

// console.log(process.argv)



// const movies = require('./stuff') 

// console.log(movies)

// const songs = require('./stuff')

// console.log(songs)

// const foods = require('./stuff')

// console.log(foods)

// const games = require('./stuff')

// console.log(games)

// const fs = require('fs')

// fs.writeFile('some.txt', 'some other text', err => {
//   if (err) { console.log(err) }
// })

const adder = (a, b) => {
  return a + b
}
const subtracter = (a, b) => {
  return a - b
}
const multiplier = (a, b) => {
  return a * b
}
const divider = (a, b) => {
  return a / b
}
const exponent = (a, b) => {
  return a ** b
}

let [, , operation, num1, num2] = process.argv

num1 = parseInt(num1)
num2 = parseInt(num2)

switch (operation) {
  case 'add':
    console.log(adder(num1, num2))
    break
  case 'subtract':
    console.log(subtracter(num1, num2))
    break
  case 'multiply':
    console.log(multiplier(num1, num2))
    break
  case 'divide':
    console.log(divider(num1, num2))
    break
  case 'exponent':
    console.log(exponent(num1, num2))
    break
}