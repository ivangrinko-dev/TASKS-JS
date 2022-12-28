// Пользователь вводит число, являющееся количеством элементов будущего
//массива. Напишите код заполнения массива методом prompt

const x = +prompt();

if (!isNaN(x)) {
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(prompt());
    }
    console.log(arr);

} else {
    console.log(`Вы ввели не число`);
}