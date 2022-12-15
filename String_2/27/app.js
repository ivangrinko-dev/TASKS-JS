// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const a = prompt().trim()


console.log(a.includes(`/`) || a.includes(`http`) || a.includes(`.com`) || a.includes(`.ru`))