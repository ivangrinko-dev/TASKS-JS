// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = prompt(`введите количество элементов массива`).trim();
const arr = [];

for (let i = 1; i < n; i++) {
  let value = prompt(`введите элемент массива`).trim();
  if (!isNaN(value)) {
    arr.push(value);
  } else {
    continue;
  }
}

let result = arr.map(function (elem) {
  return elem ** 2;
});
console.log(result);
