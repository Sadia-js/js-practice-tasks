// Generate a random number between 10 to 20

function randomValues(min, max){
    const rand = Math.floor((Math.random()*(max-min+1))+10);
    return rand;
}
const values = randomValues(10, 20);
console.log(values);