// function star() {
//     let n = 5

//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n - i; j++) {
//             row += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             row += "*"
//         }
//         console.log(row);
//     }

// }
// star()


// function star() {
//     let n = 5

//     for (let i = 0; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n - i; j++) {
//             row += "*"
//         }
//         console.log(row);
//     }
// }
// star()


// function star() {
//     let n = 5

//     for (let i = 0; i <= n - 1; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += " "
//         }
//         for (let k = 1; k <= n - i; k++) {
//             row += "*"
//         }
//         console.log(row);
//     }
// }
// star()


// function star() {
//     let n = 5

//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n - i; j++) {
//             row += " "
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += "*"
//         }
//         console.log(row);
//     }
// }
// star()


// function star() {
//     let n = 5
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += " "
//         }
//         for (let k = 1; k <= 2 * (n - i) - 1; k++) {
//             row += "*"
//         }
//         console.log(row);
//     }

// }
// star()


// function star() {
//     let n = 5
//     let num = 1
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n - i; j++) {
//             row += " "
//         }
//         for (let k = 1; k <= i - 1; k++) {
//             row += num++ + " "
//         }
//         console.log(row);
//     }

// }
// star()


// function star() {
//     let n = 5
//     let string = ""
//     for (let i = 0; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             string += "*"
//         }
//         string += "\n"
//     }
//     console.log(string)
// }

// star()

// function star() {
//     let n = 5;
//     let string = ""
//     for (let i = 0; i <= n; i++) {
//         for (let j = 1; j <= n - i; j++) {
//             string += "*"
//         }
//         string += "\n"
//     }
//     console.log(string)
// }
// star()

// function star() {
//     let n = 5;
//     let string = ""
//     for (let i = 0; i <= n; i++) {
//         for (let j = 1; j <= n - i; j++) {
//             string += " "
//         }
//         for (let k = 0; k <= i; k++) {
//             string += " *"
//         }
//         string += "\n"
//     }
//     console.log(string)
// }

// star()

// function main() {
//     const rows = 6;

//     for (let i = 0; i <= rows; i++) {
//         let space = '';
//         for (let s = 1; s <= rows - i; s++) {
//             space += '_ ';
//         }

//         let count = 1;
//         let output = space;
//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || i === 0) {
//                 count = 1;
//             } else {
//                 count = Math.floor(count * (i - j + 1) / j);
//             }
//             if (count >= 10) {
//                 output += '__';
//             } else {
//                 output += '___';
//             }
//             output += count;
//         }
//         console.log(output);
//     }
// }

// main();

function pattern() {
    let n = 5
    let string = ""
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= i; k++) {
            string += " "
        }
        for (let j = n - i + 1; j >= 1; j--) {
            string += "*"
        }
        string += "\n"
    }
    console.log(string)
}
pattern()

