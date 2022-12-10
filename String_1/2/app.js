// Выявить является ли введенное число четным
const a = +prompt()
if (a % 2 === 0) {
    console.log(`${a} - четное`)
} else {
    console.log(`${a} - нечетное`)
}

a % 2 === 0 ? console.log(`${a} - четное`) : console.log(`${a} - нечетное`)
console.log(a % 2 === 0 ? `${a} - четное` : `${a} - нечетное`)