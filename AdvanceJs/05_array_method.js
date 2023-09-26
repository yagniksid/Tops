let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("🚀 ~ file: 04_array.js:2 ~ arry:", arry)

// push method

arry.push(2)
console.log("🚀 ~ file: push method.js:5 ~ arr:", arry)

// pop method

arry.pop()
console.log("🚀 ~ file: pop method.js:12 ~ arry:", arry)

// shift method

arry.shift()
console.log("🚀 ~ file: shift method.js:15 ~ arry:", arry)

// unshift method

arry.unshift(1)
console.log("🚀 ~ file: unshift method:22 ~ arry:", arry)

// concate method 

let arry1 = [1, 2, 3, 4]
let arry2 = [5, 6, 7, 8]
arry.concat(arry1, arry2)
console.log("🚀 ~ file: concate method.js:29 ~ arry3:", arry)

// reverce method

// arry.reverse()
// console.log("🚀 ~ file: reverce_method.js:34 ~ arry:", arry)

// sort method 

let sort = [5, 2, 3, 9, 7, 4]
sort.sort()
console.log("🚀 ~ file:sort method.js:40 ~ sort:", sort)


let A = [1, 55, 3, 35, 15]
let a = (a, b) => a - b
A.sort(a)
console.log("🚀 ~ file:sorting method.js:46 ~ A:", A)


// index of 

let index = arry.indexOf(5)
console.log("🚀 ~ file: index_method.js:45 ~ index:", index)

// last index of 

let index1 = arry.lastIndexOf(2)
console.log("🚀 ~ file: last index of_method.js:50 ~ index1:", index1)

// include method

let inc = arry.includes(50)
console.log("🚀 ~ file: include_method.js:62 ~ inc:", inc)

// slice method 

let subary = arry.slice(0, 2)
console.log("🚀 ~ file:slice_method.js:68 ~ subary:", subary)

// splice method

// arry.splice(1, 2)
// arry.splice(1, 2, "hello", "world")
console.log("🚀 ~ file: 05_array_method.js:72 ~ arry:", arry)

// find method

let b = arry.find((e) => {
    console.log("->", e)
    return e > 4
})
console.log("🚀 ~ file: find_method.js:80 ~ b ~ b:", b)

// filter method

let filteraray = arry.filter((e) => {
    console.log("->", e)
    return e < 7
})
console.log("🚀 ~ file:filter_methodfilteraray:", filteraray)

// find index method

let findIndex = arry.findIndex((a) => {
    return a > 8
})
console.log("🚀 ~ file: find_index findIndex:", findIndex)

// for each method

arry.forEach((e) => {
    console.log("for each method", e);
})

// map method

let y = arry.map((e) => {
    return e + 5
})
console.log("🚀 ~ file: 05_array_method.js:106 ~ y ~ y:", y)

// reduce method

let d = arry.reduce((lastreturnvalue, e, i) => {
    console.log("🚀 ~ file: reduce_method.js:114 ~ d ~ lastreturnvalue, e, i:", lastreturnvalue, e, i)
    return lastreturnvalue + e
})
console.log("🚀 ~ file: reduce_method.js:116 ~ d ~ d:", d)
