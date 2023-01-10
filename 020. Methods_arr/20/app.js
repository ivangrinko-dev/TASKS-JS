// 20. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = prompt(`Ввеите количество элементов массива`);
const arr = [];

for (let i = 0; i < n; i++) {
  const value = prompt(`Ввеите элемент массива`);
  if (!isNaN(value)) {
    arr.push(value);
  } else {
    continue;
  }
}

const resut = [];
arr.filter(function (elem) {
  if (elem > 0) {
    resut.push(elem);
  }
});
console.log(resut)
