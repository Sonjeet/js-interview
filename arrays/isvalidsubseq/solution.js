/**
 * @author Sonjeet Paul <https://github.com/sonjeet>
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * n represents the length of the first array
 */

function isValidSubsequence(arr, seq) {
  let seqIdx = 0;
  for (const num of arr) {
    if (num === seq[seqIdx]) ++seqIdx;
    if (seqIdx === seq.length) break;
  }
  return seqIdx === seq.length;
}

module.exports = isValidSubsequence;
