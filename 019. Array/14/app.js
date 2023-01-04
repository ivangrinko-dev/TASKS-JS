// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

const arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let char = num[0];

  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}
console.log(arr.filter((num) => ["1", "2", "5"].includes(num.toString()[0])));
