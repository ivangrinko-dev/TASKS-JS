// Пользователь вводит число, являющееся количеством элементов будущего
//массива. Напишите код заполнения массива методом prompt

<<<<<<< HEAD
//Напишите код, который разворачивает строку не используя reverse

const str = `Happy nwe year`;
let result = ``;

for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);
=======
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
>>>>>>> ba29b9ebd036a5a4b3a536516026f6f6fe088691
