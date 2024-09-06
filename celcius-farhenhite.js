// Write a function to convert temperature from Celsius to Fahrenheit.

function temperature(celsius){
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

const temp = temperature(20);
console.log(temp,'\u00B0');