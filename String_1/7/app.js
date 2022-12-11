// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
//ними равно S км. Добавить проверку на ввод только чисел
let v1 = +prompt();
let v2 = +prompt();
let s = +prompt();
const t = s / (v1 + v2);
if (isNaN(t)) {
  console.log(`ошибка`);
} else {
  console.log(t);
}

isNaN(t) ? console.log(`ошибка`) : console.log(t);

console.log(isNaN(t) ? `ошибка` : t);
