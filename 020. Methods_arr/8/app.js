// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
  }

let result = arr.every(function(elem){
    if (!isNaN(elem)){
        return true
    } else {
        return false
    }
})

console.log(result)

let bool = false;

arr.forEach(function(elem){
    if (!isNaN(elem)) {
        bool = true;
        return null;
    } else {
        bool = false;
    }
})
console.log(bool);