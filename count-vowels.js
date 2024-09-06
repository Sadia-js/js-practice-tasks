// Write a function to count the number of vowels in a string.

let vowel = 'aeiou';
function countVowels(count){ 
    let box = '';
    for(const item of count){
        if(vowel.includes(item.toLowerCase())){
            box = box + item;
         }
    }

    return box.length;
}
const person = 'NAfisA';
const vowels = countVowels(person);
console.log(vowels);