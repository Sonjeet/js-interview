/**
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * Time complexity: O(nlog(n))
 * Space complexity: O(1)
 * n represents the length of the array
 */

function twoNumSum(arr, targetSum) {
  // run a sort in O(nlog(n)) time
  const sortedArray = arr.sort((a, b) => a - b);

  // create left and right pointers
  // left pointer points to first integer in the array
  // right pointer points to last integer in the array
  let lp = 0;
  let rp = sortedArray.length - 1;

  while (lp < rp) {
    const currentSum = sortedArray[lp] + sortedArray[rp];
    if (currentSum === targetSum) return [sortedArray[lp], sortedArray[rp]];

    if (currentSum < targetSum) ++lp;
    if (currentSum > targetSum) --rp;
  }

  return [];
}

module.exports = twoNumSum;
