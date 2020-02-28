let dict = {};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return [""];
  }

  if (n === 1) {
    return ["()"];
  }

  if (dict[n]) {
    return dict[n];
  }

  let result = [];

  for (let i = 0; i < n; i++) {
    const lefts = generateParenthesis(i);
    const rights = generateParenthesis(n - i - 1);
    for (const left of lefts) {
      for (const right of rights) {
        result.push(`(${left})` + `${right}`);
      }
    }
  }
  dict[n] = result
  return result;
};
