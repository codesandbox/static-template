/**
 * 861. 翻转矩阵后的得分
 *
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const rowLen = A[0].length;

  let rowTransform = A.map((item) => {
    if (item[0] !== 1) {
      return item.map((v) => (v === 0 ? 1 : 0));
    }
    return item;
  });

  for (let i = 1; i < rowLen; i++) {
    const zeroCount = rowTransform.filter((item) => {
      return item[i] === 0;
    }).length;

    if (zeroCount > rowTransform.length - zeroCount) {
      rowTransform.forEach((item) => {
        if (item[i] === 0) {
          item[i] = 1;
        } else {
          item[i] = 0;
        }
      });
    }
  }

  return rowTransform
    .map((item) => parseInt(item.join(""), 2))
    .reduce((pre, cur) => {
      return pre + cur;
    }, 0);
};

// var matrixScore = function (A) {
//   const m = A.length,
//     n = A[0].length;
//   let ret = m * (1 << (n - 1));
//   debugger;
//   for (let j = 1; j < n; j++) {
//     let nOnes = 0;
//     for (let i = 0; i < m; i++) {
//       if (A[i][0] === 1) {
//         nOnes += A[i][j];
//       } else {
//         nOnes += 1 - A[i][j]; // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
//       }
//     }
//     const k = Math.max(nOnes, m - nOnes);
//     ret += k * (1 << (n - j - 1));
//   }
//   return ret;
// };

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0]
  ])
);
