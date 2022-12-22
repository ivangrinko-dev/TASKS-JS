// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

const a = `апельсин`.trim().toLowerCase();
const b = `спаниель`.trim().toLowerCase();

//console.log(a === b)
let velue = b
for (let i = 0; i <= a.length; i++) {
     velue += a[i]
}
console.log(a === velue ? true : false)




// if (isAnagram(a, b)) {
//     console.log(`эти слова анаграммы`)
// } else {
//     console.log(`эти слова не анаграммы`)
// }




