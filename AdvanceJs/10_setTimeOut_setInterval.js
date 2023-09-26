// setTimeout(() => {
//     console.log("------->");
// }, 2000)

let x = 10
let id = setInterval(() => {
    x++
    console.log("🚀 ~ file: 10_setTimeOut_setInterval.js:6 ~ x:", x)
})

setInterval(() => {
    clearInterval(id)
}, 1000)
