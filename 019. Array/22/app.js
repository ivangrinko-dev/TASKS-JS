// Пользователь вводит число, характеризующее количество элементов будущего массива
//  Необходимо составить ряд Фибоначчи, где каждое число образуется при сложении 2 предыдущих

// 10 -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const f = 10;

let arr = [0, 1];

for (let i = 2; i <= f; i++) {
  arr.push(arr[i - 1] + arr[i - 2]);
}

console.log(arr);
