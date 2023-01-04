// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

let x = +prompt();

if (isNaN(x)) {
    console.log(`ввeдитe число`);
} else {
    x = +x;
    if (x > 0) {
        const a = Math.round(x / 100 % 10);
        const b = Math.round(x / 10 % 10);
        const c = Math.round(x % 10);
        console.log(`сумма = ${a + b + c}`);
        console.log(`произведение = ${a * b * c}`);
    } else {
        console.log(`введите положительное число`);
    }
}

