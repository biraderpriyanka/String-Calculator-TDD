const stringCalculator = require('./stringCalculator');

// Handle an input for empty String
describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  // Handle an input for Single Number
  test('should return the number itself if the string has one number', () => {
    expect(stringCalculator('1')).toBe(1);
    expect(stringCalculator('5')).toBe(5);
  });
  
    // Handle two Numbers
  test('should return the sum of two numbers separated by a comma', () => {
    expect(stringCalculator('1,2')).toBe(3);
    expect(stringCalculator('4,6')).toBe(10);
    expect(stringCalculator('1,2,3')).toBe(6);
  });

  test('handles multiple numbers separated by newlines', () => {
    expect(stringCalculator('1\n2\n3')).toBe(6);
  })

  test('handles numbers with mixed commas and newlines', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
  })

  test('handles input with leading and trailing spaces', () => {
    expect(stringCalculator('  1 , 2  \n 3 ')).toBe(6);
  });

  test('handles input with leading and trailing spaces', () => {
    expect(stringCalculator('  1 , 2  \n 3 ')).toBe(6);
  });
  
  // Custom delimiter tests
  test('handles custom delimiter defined at the start', () => {
    expect(stringCalculator('//;\n1;2')).toBe(3); // Custom delimiter is ';'
  });
  
  test('handles custom delimiter with multiple numbers', () => {
    expect(stringCalculator('//;\n1;2;3')).toBe(6); // Custom delimiter is ';'
  });
  
  test('handles custom delimiter with newlines', () => {
    expect(stringCalculator('//;\n1;2\n3')).toBe(6); // Custom delimiter is ';', mixed with newlines
  });
  
  test('handles custom delimiter wrapped in square brackets', () => {
    expect(stringCalculator('//[;]\n1;2')).toBe(3); // Custom delimiter is ';' inside square brackets
  });
  
  test('handles custom delimiter and default delimiters', () => {
    expect(stringCalculator('//;\n1;2\n3')).toBe(6); // Custom delimiter is ';', with newlines as well
  });
  
  test('handles custom delimiter with spaces around the numbers', () => {
    expect(stringCalculator('//;\n  1 ; 2 \n3 ')).toBe(6); // Custom delimiter is ';'
  });
  // Negative number tests
test('throws error for a single negative number', () => {
  expect(() => stringCalculator('1,-2')).toThrow('negatives not allowed: -2');
});

test('throws error for multiple negative numbers', () => {
  expect(() => stringCalculator('-1,-2,-3')).toThrow('negatives not allowed: -1, -2, -3');
});

test('throws error for negative number with custom delimiter', () => {
  expect(() => stringCalculator('//;\n1;-2')).toThrow('negatives not allowed: -2');
});

test('throws error for negative number with mixed delimiters', () => {
  expect(() => stringCalculator('//;\n1;-2\n3')).toThrow('negatives not allowed: -2');
});

test('ignores numbers greater than 1000', () => {
  expect(stringCalculator('2,1001')).toBe(2); // 1001 should be ignored
});

test('handles large numbers by ignoring them', () => {
  expect(stringCalculator('2,1000,1001')).toBe(1002); // 1001 should be ignored
});

test('ignores numbers greater than 1000 with newlines', () => {
  expect(stringCalculator('2\n1001')).toBe(2); // 1001 should be ignored
});

test('ignores numbers greater than 1000 with mixed delimiters', () => {
  expect(stringCalculator('//;\n2;1001')).toBe(2); // 1001 should be ignored
});
  
});