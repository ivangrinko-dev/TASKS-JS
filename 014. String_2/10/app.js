// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки
const a = "HTML JavaScript PHP"

console.log(a.length);
console.log(a.slice(0,5));
console.log(a.slice(5,15));
console.log(a.split(` `)[1]);