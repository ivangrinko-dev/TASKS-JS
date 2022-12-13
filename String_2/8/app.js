//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

const a = 'aaa bbb ccc'

console.log(a.split(`b`).join(``));

console.log(a.replaceAll(`b`,``));