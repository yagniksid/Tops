// const sum_sub = require("./sum_sub")
// console.log("sum_sub:", sum_sub)

// let x = sum_sub.sum(20, 10)
// console.log("x:", x)

// let y = sum_sub.sub(20, 30)
// console.log("y:", y)

// let multi_divide = require("./divide_multi")
// console.log("multi_divide:", multi_divide)

// let a = multi_divide.multiply(20, 10)
// console.log("a:", a)

// let b = multi_divide.devide(50, 25)
// console.log("b:", b)


//------- using destructure ------- 

const { sum, sub } = require("./sum_sub")
console.log("🚀 ~ file: index.js:22 ~  sum, sub:", sum, sub)


let x = sum(20, 10)
console.log("x:", x)

let y = sub(20, 30)
console.log("y:", y)

let { multiply, devide } = require("./divide_multi")
console.log("multiply, devide:", multiply, devide)


let a = multiply(20, 10)
console.log("a:", a)

let b = devide(50, 25)
console.log("b:", b)

