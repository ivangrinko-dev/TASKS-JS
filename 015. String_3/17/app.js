// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

const str = prompt();

if (isNaN(str)) {
    console.log(str.toUpperCase());
}
