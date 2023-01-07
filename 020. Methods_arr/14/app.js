// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]


const n = prompt()
const arr = []

for(let i = 0; i < n; i++) {
    const value = prompt(`заполнение массива`)
    if (isNaN(value))
    arr.push(value)
}

// const result = arr.map(function(elem){
//     return `#` + elem
// })


// const result = ``
// arr.forEach(function(elem){
//     result.push(`#` +elem)
// })
const result = arr.reduce(function(sum,elem){
return sum + `#` + elem + ` `
},``)

console.log(result.trim.split(` `))
