// || returns the first truthy value.
// ?? returns the first defined value.


let x = 0 || 100 // null/undefined/0/false
console.log("🚀 ~ file: 11_nullish.js:2 ~ x:", x)

let y = null ?? 1 // null/undefined
console.log("🚀 ~ file: 11_nullish.js:5 ~ y:", y)
