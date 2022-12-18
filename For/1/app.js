// На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

const str = `123@1@@34`
let result = ``

if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === `@`) {
          continue   
        } else {
            result += str[i]
        } 
    }
    console.log(result) 
} else {
    console.log(`ошибка ввода`)
}
