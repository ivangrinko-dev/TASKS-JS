// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об

const a = `kgikyf`;

let result = ``;

for (let i = 1; i <= a; i++) {
  if (isNaN(a)) {
    console.log(`Ошибка ввода`);
  } else {
    result += i;
  }
}
console.log(result);
