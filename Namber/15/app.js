// Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40 –
// молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод
const a = +prompt();
if (a > 0 && a < 18 ) {
    console.log('Детство')
} else if (a > 19 && a < 40) {
    console.log('молодость')
} else if (a > 41 && a < 100) {
    console.log('зрелость')
} else if (a < 0 && a > 100) {
    console.log('не корректный ввод')
};

