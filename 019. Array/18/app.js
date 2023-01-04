// Пользователь вводит число, являющееся количеством элементов будущего
//массива. Напишите код заполнения массива методом prompt

//Напишите код, который разворачивает строку не используя reverse

const str = `Happy nwe year`;
let result = ``;

for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);
