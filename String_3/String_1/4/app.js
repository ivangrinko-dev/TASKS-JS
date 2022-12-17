// На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку
// вывести true, в противном случае false
const a = `Happy nwe year`
const b = `nwe year`

console.log(a.endsWith(b)) // - первый способ

if (a.endsWith(b)) {       // - второй способ
    console.log(true)
} else {
    console.log(false)
}

