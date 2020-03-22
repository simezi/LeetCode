// /**
//  * DP with bottom up (slower)
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//   if (amount == 0) {
//     return 0;
//   }
//   let memo = [];
//   for (let i = 1; i <= amount; i++) {
//     let min;
//     for (let j = 0; j < coins.length; j++) {
//       if (i === coins[j]) {
//         min = 0;
//         break;
//       } else if (memo[i - coins[j]] != null) {
//         if (!min) {
//           min = memo[i - coins[j]];
//         } else {
//           min = min > memo[i - coins[j]] ? memo[i - coins[j]] : min;
//         }
//       }
//     }
//     memo[i] = min + 1;
//   }
//   return memo[amount] || -1;
// };

var coinChange = function(coins, amount) {
  let memo = [];
  function helper(coins, amount) {
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }
    if (memo[amount]) {
      return memo[amount];
    }
    let min = Number.MAX_VALUE;
    for (let i = 0; i < coins.length; i++) {
      let result = helper(coins, amount - coins[i]) + 1;
      if (result > 0) {
        min = min > result ? result : min;
      }
    }
    let result = min == Number.MAX_VALUE ? -1 : min;
    memo[amount] = result;
    return result;
  }
  return helper(coins, amount);
};
