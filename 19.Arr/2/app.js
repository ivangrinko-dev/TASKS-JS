//[1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

const a = [1, 2, 3, 4, 5];

for (let i = 1; i <= a.length; i++) {
  console.log(i)
}

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