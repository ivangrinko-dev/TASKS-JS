//Выведите столбец четных чисел в промежутке от 0 до 100 (for)

const arr = 100;

for (let i = 0; i <= arr; i++) {
  // if (i % 2 === 0) {
  //     console.log(i)
  // }
  // console.log(i % 2 === 0 ? i : ``)

  i % 2 === 0 ? console.log(i) : null;
}
