// let PROMISE = new Promise((resolve, reject) => {
//     if (true) {
//         resolve({ name: "yagnik" })
//     }
//     else {
//         reject("work not done")
//     }
// })

// PROMISE.then((res) => {
//     setTimeout(() => {
//         console.log("res ---->", res);
//         JSON.parse({ a: 20 })
//     }, 2000);
//     return { surname: "sid" }
// }).then((res2) => {
//     setTimeout(() => {
//         console.log("res2 ---->", res2);
//     }, 4000);
// }).catch((err) => {
//     console.log("error ---->", err.message);
// })  



let pendingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("yagnik");
    }, 5000);
})

let x = pendingPromise;
console.log("x:", x)
