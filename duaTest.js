// # ARRAY (index, banyak data)
// let arr = ["a", "b", "c", "d", "e"]
// let arr2 = new Array("a", "b", "c", "d", "e")

// // cara akses
console.log(arr[0])

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

let num = [1, 2, 4, 5]
// // num.push(6)   // nambah value dibelakang
// // num.pop()     // hapus value dibelakang

// // num.shift()   // hapus value didepan
// // num.unshift() // nambah value didepan

// // num.splice(1, 2)        // hapus value ditengah
// num.splice(2, 0, 3)  // tambah value ditengah

num.sort((a, b) => a - b)  // ascending
// num.sort((a, b) => b - a)  // descending

// num.reverse()  // mengembalikan ke awal
// console.log(num);

// // tidak bisa return array baru
// // num.forEach((item) => {
// //     console.log(item);
// // })

// // // bisa return array baru
// // num.map((item) => {
// //     console.log(item);
// // })


// let newNum = num.map((item) => item + 3)
// console.log(newNum)

// let sumNum = newNum.reduce((a, b) => a + b)
// console.log(sumNum)


// # LOOPING
// const fruits = ["apple", "banana", "lemon"]

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// # FUNCTION
// // cara pertama
// function sum(a, b, c) {
//     return a * b 
// }
// console.log(sum(5, 10))


// // cara kedua
// const square = function(number) {
//     return number * number
// }
// console.log(square(10))

// function greeting() {
//     let hello = "aryundha"
    
//     return hello
// }
// console.log(greeting())


// // # NESTED FUNCTION
// function getMessage(firstName) {
//     function sayHello() {
//         return "Hello" + firstName + " "
//     }

//     function welcomeMessage() {
//         return "Welcome to purwadhika"
//     }

//     return sayHello() + " " + welcomeMessage()
// }

// console.log(getMessage(" Aryundha"))

//  //# FUNCTION CURRYING
// function multiplier(factor) {
//     return function (number) {
//         return factor * number
//     }
// }

// const mul3 = multiplier(3)
// console.log(mul3(5))

// // // # RECURSIVE FUNCTION

// function countDown(fromNumber) {
//     console.log(fromNumber)

//     let nextNumber = fromNumber + 1
//     if (nextNumber < 10) {
//         countDown(nextNumber)
//     }
// }

// countDown(0)

// // # ARROW FUNCTION VS FUNCTION EXPRESSION
// A. arrow function
// const added = (a, b) => a + b
// console.log(added(5, 5))

// const myFunc = (name) => {
//     return () => {
//         return "Hello " + name
//     }
// }

// console.log(myFunc("Azza")())

// // isNan
// const number = 10 * "1"
// console.log(isNaN(number))