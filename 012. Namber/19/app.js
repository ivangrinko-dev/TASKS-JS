// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
//      ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt();
const b = +prompt();
const c = +prompt();

let value = b * b - 4 * a * c;
let x1 = (-b - Math.sqrt(value)) / (2 * a);
let x2 = (-b + Math.sqrt(value)) / (2 * a);

if (value > 0) {
    console.log((-b - Math.sqrt(value)) / (2 * a));   
    console.log((-b + Math.sqrt(value)) / (2 * a));

} else if (value === 0) {
    console.log(-b / (2 * a));

} else if (value < 0) {
    console.log('корней нет');
}

if (x1 > x2) {
    console.log(x2);
} else if(x1 < x2) {
    console.log(x1);
}