function stringCalculator(numbers){
    if(numbers === "") return 0; // Handle an input for empty String
    if (!numbers.includes(',')) return parseInt(numbers, 10);   // Handle an input for Single Number
    return numbers
    .split(',')
    .reduce((sum, num) => sum + parseInt(num, 10), 0); // Basic Scenario Handle addition
}

module.exports  = stringCalculator