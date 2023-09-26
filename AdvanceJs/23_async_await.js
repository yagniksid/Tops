function fun() {
    return new Promise((resolve, reject) => {
        throw new Error("-----error-------")
        setTimeout(() => {
            resolve("------yagnik-----")
        }, 2000);
    })
}

async function asyncFun() {
    try {
        let x = await fun()
        console.log(" x:", x)
    } catch (error) {
        console.log("-----wrond code-----", error);
    }
}

asyncFun()
