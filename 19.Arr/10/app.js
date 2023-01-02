// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
// значения массива -> [1, 5] (for)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);

// for (let i of arr) {
//     if (!newarr.includes(i)) {
//         newarr.push(i);
//       }
// }
// console.log(newarr)
