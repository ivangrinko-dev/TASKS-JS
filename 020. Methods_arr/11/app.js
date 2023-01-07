// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = prompt(`введите количество элементов`).trim();
let arr = [];

for (let i = 0; i < n; i++) {
  const pr = prompt(`введите элементы`).trim();
  if (isNaN(pr)) {
    continue;
  } else {
    arr.push(pr);
  }
}
console.log(arr);

let result = 1;
arr.forEach(function (elem) {
  result *= elem;
});
console.log(result);

const res = arr.reduce(function (sum, elem) {
  return sum * elem;
}, 1);
console.log(res);
