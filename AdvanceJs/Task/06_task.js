let PROMISE = new Promise((resolve, reject) => {
    if (true) {
        resolve({ name: "yagnik" })
    }
    else {
        reject("work not done")
    }
})

PROMISE.then((res) => {
    setTimeout(() => {
        console.log("res ---->", res);
    }, 2000);
    return { surname: "sid" }
}).then((res2) => {
    setTimeout(() => {
        console.log("res2 ---->", res2);
    }, 4000);
}).catch((err) => {
    console.log("error ---->", err.message);
})  