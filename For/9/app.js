// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об

const a = `p[uoy]`;



if (!isNaN(a)) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
} else {
  console.log(`Ошибка ввода`);
}

