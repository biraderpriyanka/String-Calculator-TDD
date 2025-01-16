function stringCalculator(numbers) {
  if (numbers === "") return 0; // Handle an input for empty String

  // If there are no commas or newlines, it's a single number
  if (!numbers.includes(',') && !numbers.includes('\n')) {
    return parseInt(numbers, 10);
  }

  let delimiter = /,|\n/; // Default delimiter is comma or newline

  // Check if the first line specifies a custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    let customDelimiter = numbers.slice(2, delimiterLineEnd).trim();
    
    // If the delimiter is wrapped in square brackets, handle it
    if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
      delimiter = customDelimiter.slice(1, -1); // Remove the square brackets
    } else {
      delimiter = customDelimiter; // Use the custom delimiter directly
    }

    // Remove the first line (delimiter definition) and process the remaining part
    numbers = numbers.slice(delimiterLineEnd + 1);
  }

  // If delimiter is a string, escape special characters for regex
  if (typeof delimiter === 'string') {
    delimiter = delimiter.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
  }
  
  // Create a regex to match the delimiter and newlines
  const regex = new RegExp(`[${delimiter}\n]`, 'g');

  // Normalize the string by replacing the delimiter(s) with commas
  const normalizedNumbers = numbers.replace(regex, ',');
  
  // Split the string by commas
  const numberArray = normalizedNumbers.split(",");

  // Check for negative numbers and store them
  const negatives = numberArray.filter(num => parseInt(num.trim(), 10) < 0);

  // If there are any negative numbers, throw an error with the message
  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(", "));
  }

  // Filter out numbers greater than 1000 and sum the rest
  const filteredNumbers = numberArray
    .map(num => parseInt(num.trim(), 10))
    .filter(num => num <= 1000);

  // Sum the valid numbers
  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = stringCalculator;
