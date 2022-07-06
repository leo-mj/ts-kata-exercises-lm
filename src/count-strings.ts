/*
Return the count of all strings in an array of numbers and strings.  Use array functions, not a loop. 
*/
/**
 * returns the count of all strings in a given array of numbers and strings
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
function countStrings(inputArray: (number | string)[]): number {
  const stringArray = inputArray.filter(
    (element) => typeof element === "string",
  );
  return stringArray.length;
}

export default countStrings;
