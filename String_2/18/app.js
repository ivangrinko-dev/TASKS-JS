// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// (for)
// fullstack => ua

const str = prompt().trim().toLowerCase();
let resalt = ``
for (let i = 0; i < str.length; i++) {
  str[i] === `a` || str[i] === `e` || str[i] === `i`|| str[i] === `o` || s[i] === `u` ? resalt += str[i] : null;
}
console.log(resalt)