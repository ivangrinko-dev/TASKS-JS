// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр (for)

const str = prompt().trim().toLowerCase();
let result = ``
for (let i = 0; i < str.length; i++) {
if (str[i] !== `_` && str [i - 1] !== `_`) {
    result += str[i]
}
if (str[i - 1] === `_`) {
    result += str[i].toUpperCase()
}
}
console.log(result)
