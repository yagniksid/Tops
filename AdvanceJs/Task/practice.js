// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let x = array.map((e) => {
//     return e
// })
// console.log("🚀 ~ file: practice.js:6 ~ x ~ x:", x)

// let index = array[9]
// console.log("🚀 ~ file: practice.js:9 ~ index:", index)

// function changeVa(e) {
//     array[e] = 100
//     console.log("🚀 ~ file: practice.js:13 ~ changeVa ~ array:", array)
// }

// changeVa(6)


// let a = array.unshift(0)
// console.log("🚀 ~ file: practice.js:20 ~ a:", array)

// array.push(99)
// console.log("🚀 ~ file: practice.js:23 ~ array:", array)

// array.sort((a, b) => a - b)
// console.log("🚀 ~ file: practice.js:26 ~ array:", array)

// array.sort((a, b) => b - a)
// console.log("🚀 ~ file: practice.js:26 ~ array:", array)

// let arr = array.includes(1)
// console.log("🚀 ~ file: practice.js:32 ~ arr:", arr)

const data = require("../data.json")

function cityName(statename) {
    let match = data.filter((e) => {
        return e.state_name === statename
    })

    let da = match.map((e) => {
        return e.city
    })
    return da
}

let x = cityName("Mahārāshtra")
console.log("🚀 ~ file: practice.js:48 ~ x:", x)

