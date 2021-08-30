const adder = (a, b) => {
  return a + b
}

console.log(adder(5, 7))

const subtr = (a, b) => {
  return a - b 
}

console.log(subtr(10, 5))

const multi = (a, b) => {
  return a * b 
}

console.log(multi(5, 10))

const pow = (a, b) => {
  return a ** b
}

console.log(pow(50, 2))

console.log(typeof(pow))

// pow is not a var but a function because of =>
