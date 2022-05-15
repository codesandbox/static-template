/**
 * 842. 将数组拆分成斐波那契序列
 *
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
  const res = [];
  backtrack(S, res, 0);
  return res;
};

const backtrack = (S, res, index) => {
  debugger;
  if (index === S.length && res.length >= 3) {
    return true;
  }
  let cur = 0;
  for (let i = index; i < S.length; i++) {
    debugger;
    if (S[index] === "0" && i > index) {
      break;
    }
    cur = cur * 10 + S[i].charCodeAt() - "0".charCodeAt();
    if (cur > Math.pow(2, 23) - 1) {
      break;
    }
    let size = res.length;
    if (size >= 2 && cur > res[size - 1] + res[size - 2]) {
      break;
    }
    if (size <= 1 || cur === res[size - 1] + res[size - 2]) {
      res.push(cur);
      if (backtrack(S, res, i + 1)) {
        return index === 0 ? res : true;
      }
      res.pop();
      if (res.length < 2 && cur === 0) {
        break;
      }
    }
  }
  return false;
};

console.log(
  splitIntoFibonacci(
    "65155860565120123725188845312570501415813985131540021293853444785557417090189551459312523612080"
  )
);
