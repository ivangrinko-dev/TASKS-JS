// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false. forEach

const value = 5;
const arr_1 = [];
const arr_2 = [];

for (let i = 0; i < value; i++) {
  arr_1.push(prompt());
}

for (let i = 0; i < value; i++) {
  arr_2.push(prompt());
}

const onestr = arr_1.join(``);
const twostr = arr_2.join(``);

if (onestr === twostr) {
  console.log(true);
} else {
  console.log(false);
}
