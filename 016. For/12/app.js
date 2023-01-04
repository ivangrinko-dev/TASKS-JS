// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = ``;

for (let i = 0; i < a.length; i++) {
 if (i === 0) result += `-`
  result += a[i] + `-` ;
}
console.log(result);
