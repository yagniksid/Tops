let PROMISE = new Promise((resolve, reject) => {
    let arr = [1, 2, 3, 4, 5, 6]
    let x = arr.find((e) => e.length > 4)
    // let x = true
    // throw new Error("--------data not found ---------")
    JSON.parse({ y: 50 })
    if (x) {
        if (x === 5) {
            resolve({ message: "x is five", x })
        } else {
            resolve({ message: "work done", x })
        }
    } else {
        reject("work not done")
    }
})

PROMISE.then((res) => {
    console.log("res ---->", res);
}).catch((err) => {
    console.log("error ---->", err.message);
})