/**
 * 4. 寻找两个正序数组的中位数
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var n1 = nums1.length;
  var n2 = nums2.length;
  var size = n1 + n2;
  var max = Math.floor(size / 2);

  var preVal = -1;
  var curVal = -1;
  var p1 = 0;
  var p2 = 0;
  for (let index = 0; index <= max; index++) {
    preVal = curVal;
    if (p1 < n1 && (p2 >= n2 || nums1[p1] < nums2[p2])) {
      curVal = nums1[p1];
      p1++;
    } else {
      curVal = nums2[p2];
      p2++;
    }
  }
  return size % 2 === 0 ? (preVal + curVal) / 2 : curVal;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
