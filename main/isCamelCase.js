/*
 * 使用正则表达式验证驼峰命名法
 * 符合返回 true，不符合返回false
 */
export default function isCamelCase(paramName) {
  const pattern = /^[a-z]+([A-Z][a-z]+)+$/;
  return pattern.test(paramName);
}
