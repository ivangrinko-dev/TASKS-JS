// Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
//остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
//выведите 'Делится с остатком' и остаток от деления
const a = +prompt();
const b = +prompt();

if (a % b === 0) {
    console.log('Делится')
} else if (a > 19 && a < 40) {
    console.log('молодость')
}