// На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

//[`Chris, Alan`]

const arr = prompt().trim().split(` `);

if (arr[0][0] === arr[0][0].toUpperCase() && arr[1][0] === arr[1][0].toUpperCase()) {
console.log(true)
} else {
    console.log(false)
}