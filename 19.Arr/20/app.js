// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7

const num = [5, 5, 6, 3, 9, 2, 1, 7];

let str = num.toString().replaceAll(`,`,``);
let result = ``;

for (let i = 0; i < str.length; i++) {
    if ((str[i-1] % 2 !== 0) && (str[i] % 2 !== 0)) {
        result += str[i] + ':'
    } else {
        result += str[i]
    }
}
console.log(result)
