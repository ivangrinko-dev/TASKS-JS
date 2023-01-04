// На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)
//  sss@bbb@aaaa@ccccc@xxx
let a = "sss@bbb@aaaa@ccccc@xxx"

console.log(a.replaceAll(`@`,`!`));


console.log(a.split(`@`).join(`!`));
