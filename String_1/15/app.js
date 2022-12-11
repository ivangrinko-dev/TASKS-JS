// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки
const a = prompt()


 if (isNaN(a)) {
    console.log(`ошибка`);
 } else {
    console.log(a.length)
 }
