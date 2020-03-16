// /** [TLE]
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//   let result = 0;
//   function walk(prices, profit, day, inTransaction) {
//     if (day === prices.length) {
//       result = Math.max(result, profit);
//       return;
//     }
//     // スルーの場合
//     walk(prices, profit, day + 1, inTransaction);
//     // アクションする場合
//     if (inTransaction) {
//       // 売る
//       walk(prices, profit + prices[day], day + 1, !inTransaction);
//     } else {
//       // 買う
//       walk(prices, profit - prices[day], day + 1, !inTransaction);
//     }
//   }
//   walk(prices, 0, 0, false);
//   return result;
// };

var maxProfit = function(prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      result += diff;
    }
  }
  return result;
};
