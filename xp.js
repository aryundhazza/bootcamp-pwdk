// function filterArray(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

// // Contoh penggunaan
// // const arr = [0, 10, 20, 30];
// // const fn = function greaterThan10(n) {
//     // return n > 10;
// // }

// const arr = [1, 2, 3];
// const fn = function firstIndex(n, i) {
//     return i === 0;
// }


// const filteredArr = filterArray(arr, fn);
// console.log(filteredArr); 

// function createCounter(n) {
//     let count = n;
//     return function() {
//         return count++;
//     };
// }

// // Contoh penggunaan
// const counter = createCounter(5);

// console.log(counter()); // Output: 5
// console.log(counter()); // Output: 6
// console.log(counter()); // Output: 7

// function* fibonacciGenerator() {
//     let a = 0, b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// const fibgen = fibonacciGenerator()

// console.log(fibgen.next().value)

// function sumPromises(promise1, promise2) {
//     return Promise.all([promise1, promise2])
//         .then(values => {
//             return values[0] + values[1];
//         });
// }

// var num = 1

// while (num <= 10) {
//     console.log("Angkot No. " + num + " beroperasi dengan baik." )
//     num++
// }


