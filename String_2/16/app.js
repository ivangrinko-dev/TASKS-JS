//Пользователь вводит строку. Необходимо посчитать количество гласных (for)
const arr = prompt().trim().toLowerCase();

let sum = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === `a` || arr[i] === `e` || arr[i] === `i` || arr[i] === `u` || arr[i] === `o` ) {
sum += 1
    }
}
console.log(sum)