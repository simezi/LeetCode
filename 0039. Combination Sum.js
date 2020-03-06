/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  const backtrack = (candidates, target, current) => {
    if (target < 0) {
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] > target) {
        return;
      }
      if (candidates[i] === target) {
        result.push([...current, target]);
        return;
      }
      backtrack(candidates.slice(i), target - candidates[i], [
        ...current,
        candidates[i]
      ]);
    }
  };
  backtrack(candidates, target, []);
  return result;
};
