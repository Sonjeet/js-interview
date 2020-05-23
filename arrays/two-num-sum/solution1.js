/**
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * n represents the length of the array
 */

function twoNumSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return [arr[i], arr[j]];
    }
  }

  return [];
}

module.exports = twoNumSum;
