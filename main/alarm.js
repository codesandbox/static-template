/**
 * 实现一个警报调度方法，让三种警报不断交替触发
 * @method alarm
 * @param {object} obj 拥有三个方法的对象
 */
function alarm(obj) {
  setInterval(obj.alarmA, 3000);
  setInterval(obj.alarmB, 2000);
  setInterval(obj.alarmC, 1000);
}

let obj = {
  alarmA() {
    console.log("警报A");
  },
  alarmB() {
    console.log("警报B");
  },
  alarmC() {
    console.log("警报C");
  }
};

alarm(obj);
