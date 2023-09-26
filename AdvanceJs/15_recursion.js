// function fun(a) {
//     console.log("yagnik --->", a);
//     if (a > 5) {
//         fun(a - 1);
//     }
// }

// fun(10)

function fun1(b) {
    console.log("---------->", b[2]);
    if (b.length > 0) {
        b.shift();
        fun1(b)
    }
}

fun1([1, 2, 3, 4, 5, 6])