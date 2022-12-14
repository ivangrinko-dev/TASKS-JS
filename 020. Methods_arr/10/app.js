// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

const n = prompt(`количество эл. масс.`).trim();
let arr = [];
for (let i = 0; i < n; i++) {
  const pr = prompt(`введите к-во элементов массива`).trim();
  if (isNaN(pr)) {
    continue;
  } else {
    arr.push(pr);
  }
}
console.log(arr);

const result = arr.map(function (elem) {
  if (elem % 2 === 0) {
    return `чет`;
  } else {
    return `нечет`;
  }
});
console.log(result);
