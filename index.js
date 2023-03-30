/**
 * 参考： 高性能javascript
 *
 * 作用域链 标识符解析
 */

var b = 1;

function aa() {
  var b = 2;
  bb();
  return function a() {
    console.log("closure", b, this.b);
  };
}

function bb() {
  // b = 3;
  console.log("b", b, "this.b", this.b);
}

let fn1 = aa();
fn1();
