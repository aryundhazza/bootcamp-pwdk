// 1. mengubah celcius ke fahrenheita
//  soal 60 C = 140 F

// let celcius = 60 
// let fahrenheit = (9/5 * celcius) + 32

// //  cara pertama/panjang
// console.log( "60 Celcius" + " " + "=" + " " + fahrenheit + " " + "Fahrenheit")
// //  cara kedua/simple
// console.log(`60 Celcius = ${fahrenheit} Fahrenheit`)


// // 2. meriksa bilangan ganjil/genap
// //  soal 25 = ganjil
// //       2 = genap

// //  angka 25 = bilangan ganjil
// let number = 25
// if(number % 2 == 0) {
//     console.log(number + " = bilangan genap")
// } else {
//     console.log(number + " = bilangan ganjil")
// }

// // ternary operator
// console.log(number % 2 == 0 ? number + " = bilangan genap" : number + " = bilangan ganjil")


// //  angka 2 = bilangan genap
// let nomor = 2
// if(nomor % 2 == 0) {
//     console.log(nomor + " = bilangan genap")
// }


// // 3. meriksa bilangan prima/bukan
// //  soal 7 = prima
// //       6 = bukan prima

// // angka 7 = prima
// // variasi 1
// let num = 7
// if(num / num == 1) {
//     console.log(num + " = bilangan prima")
// }
// // variasi 2
// let num1 = 7
// if(num1 / 1 == 7 || num1 / 1 == num1) {
//     console.log(num1 + " = bilangan prima")
// }
// // variasi 3
// let num2 = 7
// if(num2 / num2 == 1) {
//     console.log(num2 + " = bilangan prima")
// }

// // angka 6 = bukan prima
// // let ber = 6
// // if(ber / >2 == 1)




let num = 7;
let devider = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0 ) devider++;
}
console.log(devider)