//[1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

const a = [1, 2, 3, 4, 5];

for (let i = 1; i <= a.length; i++) {
  console.log(i)
}

for (let i of a) {
  console.log(i);
}

let i = 0;
do {
  console.log(a[i]);
  i++;
} while (i < a.length);
