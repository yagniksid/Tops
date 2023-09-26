// class User {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     sum(c) {
//         return this.a + this.b + c;
//     }
//     sub(a, b) {
//         return this.b - this.a;
//     }
//     multi(a, b) {
//         return this.a * this.b;
//     }
//     devide(a, b) {
//         return this.a / this.b;
//     }
// }

// let U = new User(60, 80)
// let V = new User(20, 80)
// let Y = new User(10, 20)
// let Z = new User(50, 10)
// // console.log("V:", V)
// // console.log("x:", U)
// // let x = U.sum()
// // console.log("x:", x)
// let x = U.sum(100)
// console.log("sum x:", x)

// let y = V.sub()
// console.log("sub y:", y)

// let a = Y.multi()
// console.log("multiply a:", a)

// let b = Z.devide()
// console.log("devide a:", b)


class Users {
    constructor(email) {
        this.email = email
    }
    giveName() {
        return this.email.split("@")[0]
    }
}

let g = new Users("yagnik@gmail.com")
let name = g.giveName();
console.log("------>", name);

