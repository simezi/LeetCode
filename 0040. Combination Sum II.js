/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let result = {};
  candidates.sort((a, b) => a - b);
  function backtrack(candidates, target, current) {
    if (target < 0) {
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      if (target < candidates[i]) {
        return;
      }
      if (candidates[i] === target) {
        const val = [...current, target]
        result[val] = val
        return;
      }
      backtrack(candidates.slice(i + 1), target - candidates[i], [
        ...current,
        candidates[i]
      ]);
    }
  }
  backtrack(candidates, target, []);
  return Object.values(result);
};
