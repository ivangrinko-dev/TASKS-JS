// На вход программе подается строка. Напишите программу, которая подсчитывает
// количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

const str = `abcABCD12345`;

let result = ``;
for (let i = 0; i < str.length; i++) {
  if (isNaN(str[i]) && str[i] === str[i]) {
    result += 1;
  }
}
console.log(result.length);
