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
  
});