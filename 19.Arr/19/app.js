// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const x = +prompt();

if (!isNaN(x)) {
    const arr = [];
    for (let i = 0; i < x; i++) {
        let number;
        do {
            number = +prompt();
        } while (isNaN(number))
        arr.push(number);
    }
    console.log(arr);
} else {
    console.log(`Вы ввели не число`);
}