// На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const a = `hSChOol ComPAnY`.toLowerCase()
let b = `#`
if (isNaN(a)) {
  console.log(b + a.replace(` `,``))
}