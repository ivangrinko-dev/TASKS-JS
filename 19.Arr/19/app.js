// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const x = +prompt();

<<<<<<< HEAD
if (isNaN(a)) {
  console.log(`Ошибка ввода`);
  
=======
// let arr = [];

// for (let i = 0; i < x; i++) {
// arr.push([x[i]])
// }
// console.log(arr)

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
>>>>>>> ba29b9ebd036a5a4b3a536516026f6f6fe088691
} else {
    console.log(`Вы ввели не число`);
}