// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5
const str = `АааГГЦЦцТТтттА`
let result = ``;
for (let i = 0; i < str.length; i++) {
  if (isNaN(str[i]) === str[i].includes(`A`) || str[i].includes(`a`)) {
      result += 1;
    }
}
console.log(result.length);
  


  
