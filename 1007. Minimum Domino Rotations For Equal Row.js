/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  if (A.length <= 1) {
    return 0;
  }

  function swapCount(A, B, target) {
    let countTop = 0;
    let countBottom = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] != target && B[i] != target) {
        return null;
      }
      if (A[i] == target && B[i] == target) {
        continue;
      }
      if (A[i] == target) {
        countTop++;
      }
      if (B[i] == target) {
        countBottom++;
      }
    }
    return Math.min(countTop, countBottom);
  }

  const swapTop = swapCount(A, B, A[0]);
  const swapBottom = swapCount(A, B, B[0]);

  if (swapTop == null && swapBottom == null) {
    return -1;
  }
  if (swapTop == null) {
    return swapBottom;
  }
  if (swapBottom == null) {
    return swapTop;
  }

  return Math.min(swapTop, swapBottom);
};
