// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный прямоугольник размерами n×10 несколькими способами.
// 2 -> **********
// **********

const n = 10;
//let a = `*`
// console.log(a.repeat(n));

let result = `*`

for (let i = 0; i <= n; i++) {
    result * i
}
console.log(result)