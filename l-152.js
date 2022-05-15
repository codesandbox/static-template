/**
 * 152. 乘积最大子数组
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let i = 0;
  let max = 1,
    min = 1;
  let m = Number.MIN_SAFE_INTEGER;
  while (i < nums.length) {
    // debugger;
    if (nums[i] < 0) {
      [max, min] = [min, max];
    }
    max = Math.max(max * nums[i], nums[i]);
    min = Math.min(min * nums[i], nums[i]);
    m = Math.max(m, max);
    ++i;
  }
  return m;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([0, 2]));
console.log(maxProduct([-1, 0]));
console.log(maxProduct([-1, 0, 2]));
console.log(maxProduct([-1, -2, -9, -6]));
console.log(maxProduct([-2]));
