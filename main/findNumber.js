/**
 * 给出一个数组，和一个数字，在这个数组中找出两个数字相加等于这个数字，如果没有找到返回 null
 * @method findNumber
 * @param {Array} originArr 数组
 * @param {Number} target 目标数字
 * @returns {Array || null} 返回一个和为target的数组或者null
 */

function findNumber(originArr, target) {
  if (!originArr || !target) {
    return null;
  }
  // 首先对数组进行排序
  let arr = originArr.sort((a, b) => a - b);
  // i j 分别为排序好数组的首尾
  let j = arr.length - 1;
  let i = 0;
  // 首尾相加和 target 进行比较，大了 j 前移一位，小了 i 后移一位
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return null;
}

const originArr = [1, 2, 3, 5];
const target = 6;
findNumber(originArr, target);
