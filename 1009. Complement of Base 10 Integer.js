/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  //   const complementStr = N.toString(2)
  //     .split("")
  //     .map((x) => (x === "0" ? "1" : "0"))
  //     .join("");
  //   return parseInt(complementStr,2);

  let msb = 0;
  let copy = N;
  do {
    msb++;
    copy >>= 1;
  } while (copy != 0);

  let mask = Math.pow(2, msb) - 1;
  return N ^ mask;
};
