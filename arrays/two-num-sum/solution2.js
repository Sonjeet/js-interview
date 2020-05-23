/**
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 * n represents the length of the array
 */

function twoNumSum(arr, targetSum) {
  const numsTable = {};
  for (const num of arr) {
    const match = targetSum - num;
    if (match in numsTable) {
      return [match, num];
    }
    numsTable[num] = true;
  }

  return [];
}

module.exports = twoNumSum;
