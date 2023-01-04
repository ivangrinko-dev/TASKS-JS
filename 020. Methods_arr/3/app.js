// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

const arr = [];
const value = prompt();

for (let i = 0; i < value; i++) {
  arr.push(prompt());
}
let newarr = [];
arr.forEach(function (elem) {
  if (!newarr.includes(elem)) {
    newarr.push(elem);
  }
});
if (newarr.length === 0) {
  console.log(`MP`);
} else {
  console.log(newarr);
}
