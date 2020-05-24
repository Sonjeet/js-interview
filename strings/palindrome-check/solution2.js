/**
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function isPalindrome(str) {
  const reversedStrAsArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStrAsArray.push(str[i]);
  }
  return reversedStrAsArray.join("") === str;
}

module.exports = isPalindrome;
