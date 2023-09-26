/*

// object

let obj1 = {
    name: "yagnik",
    age: 25
}


let obj3 = {}
// let boj2 = obj1
// obj1.age = 27
// console.log("🚀 ~ file: obj_referance_copy.js:7 ~  boj2:", boj2)

let obj4 = {
    a: 10,
    b: 20
}

// ... spread operator
// spread operator use to copy object 

obj3 = { ...obj1, city: "surat", ...obj4 }
obj1.name = "YAGNIK"
obj1.age = 40
console.log("🚀 ~ file: 12_obj_referance_copy.js:14 ~ obj1:", obj1)

console.log("🚀 ~ file: 12_obj_referance_copy.js:13 ~ obj3:", obj3)
 */

// -----------------------------------------------------------------------

// array

let a1 = [1, 2, 3, 4, 5]
let a2 = a1
let a3 = [...a1, 20, 5000]

// console.log("a1:", a1)
// console.log("a2:", a2)
a1[3] = 50;
console.log("a2:", a2)
console.log("a3:", a3)

Math.max(...a3)

console.log("🚀 ~ file: 12_obj_referance_copy.js:48 ~ Math.max(...a3) : ", Math.max(...a3)
)

