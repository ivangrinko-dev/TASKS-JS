// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [2, 5, -9, -15, 0, 4];

let result2 = 0;
for (let i of arr) {
  if (i >= 0) {
    result2 += i;
  }
}
console.log(result2);

let result = 0;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] >= 0) {
    result += arr[i];
  }
}
console.log(result);
