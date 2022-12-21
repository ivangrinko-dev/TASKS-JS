// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

const a = `anna.trim().toLowerCase();;

const str = `anna`.trim().toLowerCase();

if (str === str.split('').reverse().join('')) {
    console.log (true);
} else {
    console.log (false); 
}