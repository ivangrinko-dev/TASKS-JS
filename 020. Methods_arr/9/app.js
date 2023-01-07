// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt(`введите колисество элементов массива`);
const arr = [];

for (let i = 0; i < n; i++) {
  const a = prompt(`введите элемент массива`);
  if (!isNaN(a)) {
    arr.push(a);
  }
}
console.log(arr);

let sum = 0;
arr.forEach(function(elem){
    sum += +elem
})
console.log(sum)

let result = arr.reduce(function (sum, elem) {
  return sum + +elem;
}, 0);
console.log(result);
