// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
//Добавить проверки для строк. Удалить лишние пробелы

let a = prompt().trim();

if (isNaN(a)) {
 if (a === `hschool`) {
    console.log(true)
} else {
    console.log(false);
}
}