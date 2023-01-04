//Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
//то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const a = prompt().trim();

if (!isNaN(a)) {
    console.log(`ошибка ввода`)
} else if (isNaN(a)) {
    console.log(a.toLowerCase(), a.length, `символа(ов) в строке`)
    //console.log(a.length, `символа(ов) в строке`)
} 
