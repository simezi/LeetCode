/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
  this.n = n;
  this.discount = discount;
  this.products = {}
  for(let i = 0; i < products.length; i++) {
    this.products[products[i]] = prices[i]
  };
  this.count = 0;
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  let sum = 0;
  this.count++;
  for (let i = 0; i < product.length; i++) {
    const cost = this.products[product[i]] * amount[i]
    sum += cost;
  }

  if (this.count === this.n) {
    this.count = 0;
    return sum - (sum * this.discount) / 100;
  }
  return sum;
};
