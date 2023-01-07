// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = [`hschool`, `hschool_0`, `hschool_1`]
let result = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[1]) {
             continue
    } else {
        result.push(arr[i])
    }
}
console.log(result)

console.log(arr[0], arr[2])

a = arr.toString()
console.log(a.slice(0,7), a.slice(18,27))




