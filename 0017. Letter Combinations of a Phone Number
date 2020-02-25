const dict = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length == 0) {
    return [];
  }
  if (digits.length == 1) {
    return dict[digits];
  }
  let result = [];
  const left = dict[digits.charAt(0)];
  const right =
    digits.length > 2
      ? letterCombinations(digits.slice(1))
      : dict[digits.charAt(1)];
  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      result.push(left[i] + right[j]);
    }
  }

  return result;
};
