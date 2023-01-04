// На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет 5
// первыми значениями массив. Далее необходимо создать массив из тех значений,
// которые являются числами и НЕ равны 2 другим введенным. Если длина массива
// равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод только чисел после
// каждого введенного элемента. forEach

const value = 5;

const a = prompt();
const b = prompt();

let arr = [];

for (let i = 0; i < value; i++) {
  let newValue = prompt();
  arr.push(newValue);
}
let result = [];
arr.forEach(function (elem) {
  if (!isNaN(elem) && (elem !== a || elem !== b)) {
    result.push(elem);
  }
});

if (result.length === 0) {
  console.log(`Массив пуст`);
} else {
  console.log(result);
}
