
// destructuring

let obj = {
    x: 200,
    y: 300,
    z: 400
}

let { x, z, y } = obj;
console.log("🚀 ~ file: 13_destructing-rest.js:8 ~  x, z, y :", x, z, y)

let arr = [1, 2, 3, 4, 5]

let [a, c, b] = arr
console.log("🚀 ~ file: 13_destructing-rest.js:13 ~ a, c, b:", a, c, b)


// Rest

let array = [1, 2, 3, 4, 5, 6, 7]

let [e, f, g, ...d] = array
console.log("🚀 ~ file: 13_destructing-rest.js:21 ~ e, f, g, ...d:", e, f, g, d)
