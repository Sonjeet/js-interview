/**
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function isPalindrome(str) {
  // create left and right pointers
  // left pointer points to first integer in the array
  // right pointer points to last integer in the arra
  let lp = 0;
  let rp = str.length - 1;

  while (lp < rp) {
    if (str[lp] !== str[rp]) return false;
    ++lp;
    --rp;
  }
  return true;
}

module.exports = isPalindrome;
