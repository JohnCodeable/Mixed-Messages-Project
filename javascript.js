let randomNumber = Math.floor(Math.random() * 6);
let luck = '';
if (randomNumber === 0) {
    luck = 'is worse than ever';
} else if (randomNumber === 1) {
    luck = 'is terrible';
} else if (randomNumber === 2) {
    luck = 'is bad';
} else if (randomNumber === 3) {
    luck = 'is okay';
} else if (randomNumber === 4) {
    luck = 'is good';
} else if (randomNumber === 5) {
    luck = 'is great'
};
console.log(`On a scale of 0-5, your luck ${luck}.`);