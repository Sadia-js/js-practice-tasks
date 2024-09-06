/* Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function longestWord(string){
    let longChar = '';
    const parts = string.split(' ');
    for(let i = 0; i < parts.length; i++){
        if(parts[i].length > longChar.length){
            longChar = parts[i];
        }
    }
    console.log(longChar);
}


const str = 'I am learning Programming to become a programmer';
const largestWord = longestWord(str);
console.log(largestWord);
