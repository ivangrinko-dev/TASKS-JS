// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива

const a = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < a.length; i++) {
    result *= a[i];
}
console.log(result)