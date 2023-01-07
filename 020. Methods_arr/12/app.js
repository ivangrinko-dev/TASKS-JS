// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
  let velue = prompt();
  if (isNaN(velue)) {
    arr.push(prompt());
  }
}
console.log(arr);

let result = arr.filter(function(elem){
    console.log(e)
    if (elem === `a` || elem === `h`) {
        return true
    } else {
        return false
    }
})

console.log(result);
