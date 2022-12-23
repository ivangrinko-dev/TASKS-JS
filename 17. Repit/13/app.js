// Найдите минимальное значение в массиве используя цикл

const arr = [1, 3, 5, 8, -10];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
}
console.log(min)
