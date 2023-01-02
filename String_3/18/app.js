// Пользователь вводит строку. Необходимо повторить ее трижды

const a = prompt().trim ();

if (isNaN(a)) {
    console.log(a.repeat(3));
}