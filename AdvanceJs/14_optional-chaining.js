let obj = { a: 50, b: 60 }
let d = (() => {
    console.log("yagnik");
})
console.log(obj.a)
console.log(obj.b)

// console.log(obj.x.y)

let x = obj ? (obj.b ? obj.c : undefined) : undefined;
console.log("x:", x)

let y = obj?.d?.()
console.log(" y:", y)



