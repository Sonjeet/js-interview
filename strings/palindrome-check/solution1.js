/**
 * @author Sonjeet Paul <hhtps://github.com/sonjeet>
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 * n represents the length of str
 *
 * NOTE: at first, it may not be apparent why the solution is O(n^2) in time complexity
 * .. this is because the += operator traverses each character of a string, makes a copy, and then appends the new character
 */

function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr === str;
}

module.exports = isPalindrome;
