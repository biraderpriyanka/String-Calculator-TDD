function stringCalculator(numbers){
    if(numbers === "") return 0; // Handle an input for empty String
    if (!numbers.includes(',')) return parseInt(numbers, 10);   // Handle an input for Single Number
  // Default case for commas and newlines
  return numbers.split(/,|\n/).reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports  = stringCalculator