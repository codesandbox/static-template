/**
 * 实现一个简单的栅格密码翻译方法
 * @method decipher
 * @param {string} origin 原始字符串
 * @returns {string} 解密后的字符串
 */

export default function decipher(origin, num) {
  if (origin.length < 1) return false;
  let length = origin.length;
  // 使用一个计数器，每次递增1，每次更新当前位置字符串长度，在此基础上进行提取密码
  let count = 0;
  let result = "";
  for (let i = 0; i < length; i++) {
    count += num;
    // 判断当前位置和下一步要走的距离是否小于总长度
    if (count + i < length) {
      // 每次更新原始字符串的长度为当前位置到剩下的长度
      origin = origin.slice(count - 1);
      result += origin.slice(count - 1, count);
    }
  }
  return result;
}
