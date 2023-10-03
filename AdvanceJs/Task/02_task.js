// -> make one array who have value from 1 to 10

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. print 9th and 10th index of array

function FindIndex(array) {
    let Index = array[9]
    return Index
}
console.log("array:", FindIndex(array))
function FindIndex1(array) {
    let Index1 = array[10]
    return Index1
}
console.log("array:", FindIndex1(array))

// 2. print every element of array by map and for loop

function Printarray() {
    array.forEach((e) => {
        return e
    })
    return array
}
console.log("Printarray ~ array:", Printarray(array))

function PrintarrayMap() {
    array.map((e) => {
        return e
    })
    return array
}
console.log("PrintarrayMap ~ array:", PrintarrayMap(array))

// 3. change a value of 6th index with 100

function chngvalue(a) {
    array[a] = 100;
    console.log("chnVal:", array)
}
chngvalue(6)

// 4. print a array till element value not grater then 100

function GratrValue(a) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == a) {
            break;
        }
        console.log("print a array till element value not grater then 100", array[i]);
    }
}
GratrValue(100)

// 5. add 1 in every element of an array

let addarray = array.map((e) => {
    return e + 1
})
console.log(" addarray:", addarray)

// 6. add 0 in start of array

function AddValue(a) {
    array.unshift(a)
    console.log("unshiftarray:", array)
}
AddValue(0)

// 7. add  99 in end of array

array.push(99)
console.log(" add 99 in array:", array)

// 8. remove 1 element from start of  array

array.shift()
console.log("shiftarray:", array)

// 9. remove 1 element from end of array

array.pop()
console.log(" remove 1 element in array:", array)


// 10. do sum of all value of an array with use of map, reduce and for-loop

function Sum() {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}
console.log('for loop: ', Sum(array));

// 11. sort a array in acending decending

function Sort() {
    let Sortarray = array.sort((a, b) => a - b)
    return Sortarray
}
console.log("Sortarray:", Sort())



// 12. reverce an array with use of method

array.reverse()
console.log("reverce array with reverce method :", array)

// 13. reverce an array with use of for-loop

let reversed_array = []
for (let i = array.length - 1; i >= 0; i--) {
    reversed_array.push(array[i]);
}

console.log("reversed_array with use of for loop :", reversed_array)

// [1,2,3] => [3,2,1] [2,1]

// ___________________________________________________________________________________

// task-2
let array1 = [1, 2, 3, 6, 7, 9, 3, 56, 8]

// 1. give all value which can devided by 2 - not use filter
for (let i = 0; i < array.length; i++) {
    if (array1[i] % 2 == 0) {
        console.log("all value which devide by 2 :", array1[i])
    }
}

// 2. give all value above 3 by use of filter

let Fillarray = array1.filter((e) => {
    return e > 3
})
console.log(" Fillarray:", Fillarray)

// 3. give index of 56

let Findarray = array1.findIndex((e) => {
    return e == 56
})
console.log("Findarray:", Findarray)

// 4. give true/false result when check given value is exists in array or not

let check = array1.map((e) => {
    return e == 7
})
console.log("check:", check)

// ___________________________________________________________________________________
// task-3

// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']


let str = ['i', 'am', 'urvish']

//Revres a string by loop

let reversed_String = []
for (let i = str.length - 1; i >= 0; i--) {
    reversed_String.push(str[i]);
}
console.log("reversed_String by for loop :", reversed_String)

// by map

let reversed_String_1 = str.map((str) => {
    return str;
}).reverse();

console.log("reversed_String_1 by map :", reversed_String_1)

// 2. want "i am urvish" without use join method

let ToString = str.toString().replace(/\,/g, " ")
console.log("ToString :", ToString)

/*

___________________________________________________________________________________

task-4

['i','am', 'urvish'] ==> want ['hsivru','ma','i']
by use of loop
*/

let Name = ['i', 'am', 'urvish']
for (let i = Name.length - 1; i >= 0; i--) {
    let newname = Name[i].split(" ")
    console.log("Name:", newname)
}
