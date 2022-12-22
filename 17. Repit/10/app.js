// Задача на слово палиндром. 

const velue = `иван`.trim().toLowerCase();

let reversvelue = ``

if (velue === velue.split('').reverse().join('')) {
    console.log(`это слово палиндром`);
} else {
    console.log(`это слово не палиндром`);
}


for (let i = velue.length - 1; i >= 0; i--) {
    reversvelue += velue[i]
}
console.log(reversvelue === velue ? `это слово палиндром` : `это слово не палиндром`)