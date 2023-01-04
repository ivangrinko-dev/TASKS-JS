// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

const value = 5;
const arr = [];

for (let i = 0; i < value; i++) {
  let a = prompt();
  arr.push(a);
}

let result = arr.filter(function (elem) {
  if (isNaN(elem)) {
    return false;
  } else {
    return true;
  }
});

if (result.length > 0) {
  console.log(result);
} else {
  console.log(`Массив пуст`);
}
