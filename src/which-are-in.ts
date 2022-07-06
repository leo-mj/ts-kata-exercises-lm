/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order
 * of the strings of a1 which are substrings of strings of a2.
 * @param {string[]} a1 - the first array
 * @param {string[]} a2 - the second array
 * @returns {string[]} - the array of sorted strings of a1 that are substrings of a string of a2
 */
function areIn(a1: string[], a2: string[]): string[] {
  const sortedArray: string[] = a1.filter(searchStr => isIn(searchStr,a2));
  sortedArray.sort();
  const uniqueArray: any[] = removeDuplicates(sortedArray);
  return uniqueArray;
}

/**
 * Given a string and an array, returns true if the string is a substring of any string in the array
 * @param {string[]} searchStr - string to search for
 * @param {string[]} strArray - array to search in
 * @returns {string[]} - array of strings that are substrings
 */
function isIn(searchStr: string, strArray: string[]): boolean {
  for (let str of strArray) {
    if (str.search(searchStr) != -1) {
      return true;
    }
  }
  return false;
}

/**
 * Given an array, returns a copy of that array with duplicates removed.
 * @param {string[]} strArray - sorted array with potential duplicates
 * @returns {string[]} - array without duplicates
 */
function removeDuplicates(strArray: string[]): string[] {
  const uniqueArray: string[] = [];
  for (let str of strArray) {
    if (!uniqueArray.includes(str)) {
      uniqueArray.push(str);
    }
  }
  return uniqueArray;
}

export default areIn;
