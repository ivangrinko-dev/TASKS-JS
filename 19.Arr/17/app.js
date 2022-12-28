// Дано предложение и количество раз которое его надо повторить. Напишите
// программу, которая повторяет данное предложение нужное количество раз.

const str = `im glad `;
const num = 5;
let result = ``

console.log(str.repeat(num))

for (let i = 0; i < num; i++) {
    result += str
}
console.log(result)

