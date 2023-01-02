//Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

const x1 = prompt();
const x2 = prompt();

if (isNaN(x1) || isNaN(x2)) {
  console.log(`это не число`);
} else {
  console.log(
    (x1 <= 10 && x1 >= 0) || (x2 <= 10 && x2 >= 0)
      ? `I’m ${x1}${x2}`
      : `Эти числа не соответствуют диапазону`
  );
}
