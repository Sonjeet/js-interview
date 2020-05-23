function isValidSubsequence(arr, seq) {
  let seqIdx = 0;
  for (const num of arr) {
    if (num === seq[seqIdx]) ++seqIdx;
    if (seqIdx === seq.length) break;
  }
  return seqIdx === seq.length;
}

module.exports = isValidSubsequence;
