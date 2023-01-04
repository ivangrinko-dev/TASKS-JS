// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

 const str = `vanya.grinko.82@mail.ru`.toLowerCase()
 if (str.includes(`@`) && str.endsWith(`.ru`) || str.endsWith(`.com`)) {
  console.log(true)
 } else {
  console.log(false)
 }