function stringCalculator(numbers){
    if(numbers === "") return 0; // Handle an input for empty String

   // If there are no commas or newlines, it's a single number
   if (!numbers.includes(',') && !numbers.includes('\n')) {
    return parseInt(numbers, 10);
  }
   // Normalize the string by replacing newlines with commas
   const normalizedNumbers = numbers.replace(/\n/g, ',');
  
   // Split the string by commas, trim each part, convert to integer, and sum them up
   return normalizedNumbers.split(",").reduce((sum, num) => {
     const parsedNum = parseInt(num.trim(), 10);
     return sum + parsedNum;
   }, 0);
  
  // Default case for commas and newlines
  return numbers.split(/,|\n/).reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports  = stringCalculator