/**
 * @param {number[]} light
 * @return {number}
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  const map = [];
  for (let i = 0; i < n; i++) {
    if (map[manager[i]] == null) {
      map[manager[i]] = [i];
    } else {
      map[manager[i]].push(i);
    }
  }

  function sub(index) {
    if (map[index] == null) {
      return 0;
    }
    let stack = map[index];
    let result = [0];
    while (stack.length > 0) {
      let current = stack.pop();
      result.push(informTime[index] + sub(current));
    }
    return Math.max(...result);
  }

  return sub(headID);
};
