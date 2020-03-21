/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  let reservedMap = {};
  for (let i = 0; i < reservedSeats.length; i++) {
    let seat = reservedSeats[i];
    if (!reservedMap[seat[0] - 1]) {
      reservedMap[seat[0] - 1] = [];
    }
    reservedMap[seat[0] - 1][seat[1] - 1] = true;
  }

  let result = 2 * n;
  for (let array of Object.values(reservedMap)) {
    result += countSeats(array);
  }

  function countSeats(row) {
    if (!row || row.length == 0) {
      return 0;
    }
    let result = -2;
    if (row[3] && row[7]) {
      return -2;
    }

    if (!row[1] && !row[2] && !row[3] && !row[4]) {
      result += 1;
    }
    if (!row[5] && !row[6] && !row[7] && !row[8]) {
      result += 1;
    }
    if (result == -2 && !row[3] && !row[4] && !row[5] && !row[6]) {
      result += 1;
    }
    return result;
  }

  return result;
};
