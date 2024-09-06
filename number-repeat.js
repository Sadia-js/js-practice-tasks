/* You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]

find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98,5]
find: 25
output: 0 

*/

function repeatedNumbers(counter){
    let repeats = {};
    let count = 0;
    for(let i = 0; i < counter.length; i++){
        let element = counter[i];
        if(repeats[element]){
             count++;
        }else{
            repeats[element] = 1;
        }
    }
}

const numbers = [5, 6, 11, 12, 98, 5];
const result = repeatedNumbers(numbers);
console.log(result);

