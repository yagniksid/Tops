

// try {
//     JSON.parse({ age: 20 })

// } catch (error) {
//     console.log("---->", error.message);
// }

function fun(data) {
    try {
        let arr = [1, 2, 3, 4, 5]
        let ele = arr.find((e) => e === 6)
        console.log("fun ~ ele:", ele)

        if (!ele) {
            throw new Error("element not found")
        } else {
            return ele
        }
    } catch (error) {
        return error.message;
    }
}

let data = JSON.stringify({ age: 20 })
console.log(" data:", data)

let x = fun(data)
console.log("x:", x)


