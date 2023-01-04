//Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'
let date = 'x-x-x'

console.log(date.join(``).replaceAll(`-`,`!`))