let date = new Date()
// let date = new Date(1000 * 60 * 60 * 24)
// let date = new Date(0)
// let date = new Date("2023/09/06")
console.log("date:", date)
console.log("month :", date.getMonth() + 1)
console.log(" day :", date.getDay() + 1)
console.log(" time :", date.getTime())
console.log(" fullyear :", date.getFullYear())
console.log(" date :", date.getDate())


let full_Date = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`

console.log("🚀 ~ file: 07_date.js:15 ~ full_Date:", full_Date)


