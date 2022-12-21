//Преобразуйте первую букву строки в верхний регистр несколькими способами

const str = `vanya`.toLowerCase();


console.log(str[0].toUpperCase() + str.slice(1))

let result = ``

for (let i = 0; i < str.length; i++) {
    if ( i === 0) {
        result += str[i].toUpperCase()
    } else {
        result += str[i]
    }
}
console.log(result)
