/**
 * 3.无重复字符的最长子串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const freq = Object.create(null);
  let l = 0,
    r = -1,
    res = 0;
  while (l < s.length) {
    if (r + 1 < s.length && !freq[s[r + 1]]) {
      r++;
      freq[s[r]] = typeof freq[s[r]] === "undefined" ? 1 : freq[s[r]] + 1;
    } else {
      freq[s[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
