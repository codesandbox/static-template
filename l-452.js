/**
 * 452. 用最少数量的箭引爆气球
 *
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length < 1) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let a = points[0][1];
  let count = 1;
  for (let i = 1; i < points.length; ++i) {
    if (a < points[i][0]) {
      count++;
      a = points[i][1];
    }
  }
  return count;
};

const result = findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12]
]);

console.log(result);
console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8]
  ])
);
