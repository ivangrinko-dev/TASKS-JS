//Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
//< 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное’
const a = +prompt();
if (a === 0) {
    console.log('ноль')
} else if (a < 0) {
    console.log('отрицательное')
} else if (a > 0) {
    console.log('положительное')
}
