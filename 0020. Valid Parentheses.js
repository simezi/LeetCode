/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 != 0) {
    return false;
  }
  let stack = [];
  const dict = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  for (let i = 0; i < s.length; i++) {
    let head;
    const char = s.charAt(i);
    if (dict[char] != null) {
      stack.push(char);
      continue;
    } else {
      if (stack.length == 0) {
        return false;
      }
      head = stack.pop();
    }

    if (dict[head] === char) {
      continue;
    }
    return false;
  }
  return stack.length === 0;
};
