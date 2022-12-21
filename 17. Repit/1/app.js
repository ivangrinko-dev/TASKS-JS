// Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12

const str = `123`.trim();
let sum = ``;

for (let i = 0; i < str.length; i++) {
  sum += +str[i];
}
console.log(sum);
