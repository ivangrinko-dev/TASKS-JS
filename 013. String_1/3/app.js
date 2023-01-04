// Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
//вывести день для введенного числа.
//1 -> Понедельник
const a = +prompt();
if (a === 1) {
  console.log("понедельник");
} else if (a === 2) {
  console.log("вторник");
} else if (a === 3) {
  console.log("среда");
} else if (a === 4) {
  console.log("четверг");
} else if (a === 5) {
  console.log("пятница");
} else if (a === 6) {
  console.log("суббота");
} else if (a === 7) {
  console.log("воскресенье");
} else {
  console.log("ошибка ввода");
}

switch (a) {
    case 1:
        console.log("понедельник")
        break;

    case 2:
        console.log("вторник")
        break;

    case 3:
        console.log("среда")
        break;

    case 4:
        console.log("четверг")
        break;

    case 5:
        console.log("пятница")
        break;

    case 6:
        console.log("суббота")
        break;

    case 7:
        console.log("воскресенье")
        break;
default:
    console.log("ошибка ввода")
    break

}