let obj = {
    name: "yagnik",
    age: 24,
    city: "surat",
    color: ["red", "green"]
};
// console.log("obj:", obj)

// To conver normal data into json data

let jsonData = JSON.stringify(obj)
console.log(" jsonData:", jsonData)

// To conver json data into normal data

let normalData = JSON.parse(jsonData)
console.log("normalData:", normalData)
