// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = [null, 1, 2, 2, 3, true, `origh` ];
const nwearr = [];

for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === `number`) {
        nwearr.push(arr[i])
    }
}
console.log(nwearr);

