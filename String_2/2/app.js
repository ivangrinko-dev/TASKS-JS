// Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

const a = prompt().trim();

if (!isNaN(a)) {
  console.log(a % 2 === 0 ? `четное` : `не четное`);
} else {
  console.log(a.split(``));
}
