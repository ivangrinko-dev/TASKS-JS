//Дано число 7, найдите все числа кратные 7 до 100

const nam = 7;
let nam1 = 100;

for (let i = 1; i <= nam1; i++) {
  if (i % nam === 0) {
    console.log(i);
  }
}
