/**
 * 实现一个日志检索方法，返回日志中的关键信息
 * 对传入参数的构造函数
 * @param  {...any} rest 传入的日志
 */
function logObject(...rest) {
  this.name = rest[0];
  this.time = rest[1];
  this.code = rest[2];
  this.status1 = rest[3];
  this.status2 = rest[4];
  this.delay = rest[5];
  this.url = rest[6];
}

/**
 * @param {string} logContent 日志
 * @param {Array} findItems 满足条件的数组
 */
function bash(logContent, findItems) {
  // 用一个数组来缓存日志对象
  let arr = [];
  let urlList = [];
  // 根据传入的日志创建一个对象
  for (let i = 0; i < arguments.length; i++) {
    let log = arguments[i].split(",");
    let obj = new logObject(...log);
    arr.push(obj);
  }
  // 过滤出满足条件的日志
  let result = arr.filter(item => {
    return item.code == 200 && item.delay >= 30;
  });
  result.forEach(item => {
    urlList.push(item.url);
  });
  return urlList;
}

bash(
  "name, 2018 - 01 - 01 05: 35: 00, 500, 0, 0, 125, https://sina.com",
  "name, 2018 - 01 - 01 05: 30: 00, 200, 0, 0, 30, https://alibaba.com"
);
