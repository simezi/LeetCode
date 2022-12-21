const dict = "ZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numToA = (num) => dict[num];

var convertToTitle = function(columnNumber) {
  function calc(num , current) {
    if (num <= 26) {
      return [num, ...current];
    }
    const amari = num % 26
    return calc((num - amari) / 26 - (amari == 0 ? 1 : 0), [amari, ...current]);
  }
  return calc(columnNumber, []).map(x => numToA(x)).join("");
}

