// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const n = prompt(`Ввеите количество элементов массива`);
const arr = [];

for (let i = 0; i < n; i++) {
  const value = prompt(`Ввеите элемент массива`);
  if (!isNaN(value)) {
    arr.push(value);
  } else {
    continue;
  }
}

let sum = 0;
let check = true
arr.forEach(function (elem){
  if(elem == 0) {
    check = false
  }
  if (check) {
    sum += +elem
  }
})

console.log(sum);


