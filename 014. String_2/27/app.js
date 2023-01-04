// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const a = `https://www.google.com/search?`.trim().toLowerCase();
const b = `j.bkndskkgnvsbnbn;dskfKYFYF`.trim().toLowerCase();

console.log(
  a.includes(`/`) ||
    a.includes(`http`) ||
    a.includes(`.com`) ||
    a.includes(`.ru`)
);
console.log(
  b.includes(`/`) ||
    b.includes(`http`) ||
    b.includes(`.com`) ||
    b.includes(`.ru`)
);
