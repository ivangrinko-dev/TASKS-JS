// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел

let a = +prompt();
let b = Math.sqrt(a);
if (!isNaN(b) && Number.isInteger(b)) {
  console.log(b);
} else {
  console.log(Math.round(b));
}

!isNaN(b) && Number.isInteger(b) ? console.log(b) : console.log(Math.round(b));
console.log(!isNaN(b) && Number.isInteger(b) ? b : Math.round(b))