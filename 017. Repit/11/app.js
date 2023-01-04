// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

const a = `апельсин`;
const b = `спаниель`;

const str1 = a.split(``).sort().join(``);
const str2 = b.split(``).sort().join(``);

if (str1 === str2) {
  console.log(`слова анаграмма`);
  
} else {
  console.log(`слова не анаграмма`);
}
