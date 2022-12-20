// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

const a = `anna`;

// // if (a.startsWith() === a.endsWith()) {
// //     console.log(true)
// // } else {
// //     console.log(false)
// // }
// console.log(a.startsWith())

//let a = b.length - 1;
for (let i = 0; i < a.length / 2; i++) {
  if (a[i] !== a[lastIndex - i]) {
    return false;
  }
  {
    return true;
  }
}
