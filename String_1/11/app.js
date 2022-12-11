// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1
let a = +prompt();
const b = a / 100;

if (isNaN(a)) {
  console.log(`ошибка ввода`);
} else {
  console.log(Math.round(b));
}

isNaN(a) ? console.log(`ошибка ввода`) : console.log(Math.round(b));

console.log(isNaN(a) ? `ошибка ввода` : Math.round(b));
