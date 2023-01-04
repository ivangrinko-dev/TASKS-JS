// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить то целых)
    
let a = +prompt();
const b = Math.sqrt(a);

if (parseFloat(b)) {
    console.log(Math.round(b))
} else {
    console.log(b)
}
 
