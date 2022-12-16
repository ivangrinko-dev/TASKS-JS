// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

const a = prompt().trim();

if (isNaN(a)) {
    if (a === `hschool`) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    if (a % 2 === 0) {
        console.log(`четное`)
    } else {
        console.log(`не четное`)
    }
}