// На вход подается строка '/home/user/dir/file.txt'. Необходимо вернуть имя файла
// (подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')

const a = `/home/user/dir/file.txt`;
let b = a.indexOf(`file.txt`);

console.log(a.slice(b));
