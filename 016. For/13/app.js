// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

const velue = `anna`.trim().toLowerCase();
let reversvelue = ``
if (velue === velue.split('').reverse().join('')) {
    console.log(true);
} else {
    console.log(false);
}

for (let i = velue.length - 1; i >= 0; i--) {
    reversvelue += velue[i]
}
console.log(reversvelue === velue ? true : false)