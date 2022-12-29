// Напишите код, который разворачивает строку не используя reverse

const str = `Happy nwe year !!!`

let result = ``

for (i = str.length-1; i >= 0; i--) {
  result += str [i]
}
console.log(result)