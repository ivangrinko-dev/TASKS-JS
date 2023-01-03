//[1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

const a = [1, 2, 3, 4, 5];

for (let i = 1; i <= a.length; i++) {
  console.log(i)
}

<<<<<<< HEAD
for (let i of a) {
  console.log(i);
}

let i = 0;
do {
  console.log(a[i]);
  i++;
} while (i < a.length);
=======
let i = 1;
while (i <= a.length) {
  console.log(i)
  i++
}

let x = 1;
do {
  console.log(x)
  x++
} while (i <= a.length)

for (let i of a) {
  console.log(i)
}

for (let i in a) {
  console.log(`a.${i} = ${a[i]}`)
}
>>>>>>> ba29b9ebd036a5a4b3a536516026f6f6fe088691
