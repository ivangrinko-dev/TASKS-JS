// Задача на слово палиндром.
const str1 = `нос`;
const str2 = `сон`;

const sortstr1 = str1.split(``).sort().join(``);
const sortstr2 = str2.split(``).sort().join(``);

if (sortstr1 === sortstr2) {
  console.log(`Эти слова анаграмма`);
} else {
  console.log(`Эти слова не анаграмма`);
}
