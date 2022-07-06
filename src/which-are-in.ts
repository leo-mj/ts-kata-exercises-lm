/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order
 * of the strings of a1 which are substrings of strings of a2.
 * @param {string[]} a1 - the first array
 * @param {string[]} a2 - the second array
 * @returns {string[]} - the sorted array of strings
 */
function areIn(a1: string[], a2: string[]): string[] {
  const sortedArray: any[] = [];
  for (let element of a1) {
    if (isIn(element, a2)) {
      sortedArray.push(element);
    }
  }
  sortedArray.sort();
  return sortedArray;
}

/**
 * Given a string and an array of strings, returns true if the string is a substring of any string in the array
 * @param {string} searchStr - string to search for
 * @param {string[]} strArray - array to search in
 */
function isIn(searchStr: string, strArray: string[]): boolean {
  for (let element of strArray) {
    if (element.search(searchStr) != -1) {
      return true;
    }
  }
  return false;
}

export default areIn;
