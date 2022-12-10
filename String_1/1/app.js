// 1. Найти максимальное число из 2 введенных (2 способа)
const a = +prompt()
const b = +prompt()
console.log(Math.max(a,b))

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}
a > b ? console.log(a) : console.log(b)
console.log(a > b ? a : b )