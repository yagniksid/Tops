let obj = {
    name: "yagnik",
    age: 25
};
console.log("🚀 ~ file: 04_object.js:5 ~ obj:", obj.name);



let arr = []
for (const key in obj) {
    console.log("----", obj[key])
    arr.push(key)
}

let values = Object.values(obj)
console.log("🚀 ~ file: 04_object.js:16 ~ values:", values)

let keys = Object.keys(obj)
console.log("🚀 ~ file: 04_object.js:19 ~ keys:", keys)

let entries = Object.entries(obj)
console.log("🚀 ~ file: 04_object.js:22 ~ entries:", entries)

