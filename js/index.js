var tt;
var yy;
function del(btn) {
  //获取table
  var ta = document.getElementById("t0");
  //获取删除对象
  var tr = btn.parentNode.parentNode;
  //删除行
  ta.deleteRow(tr.rowIndex);
}

function update(btn) {
  var tr = btn.parentNode.parentNode;
  var cell = tr.cells[1];
  document.getElementById("name").value = cell.innerHTML;
  var cell = tr.cells[2];
  document.getElementById("age").value = cell.innerHTML;
  var cell = tr.cells[3];
  document.getElementById("sex").value = cell.innerHTML;
  var cell = tr.cells[4];
  document.getElementById("number").value = cell.innerHTML;
  var cell = tr.cells[5];
  document.getElementById("addres").value = cell.innerHTML;
  tt = btn;
}
function update2(btn) {
  if (tt != null) {
    var tr = tt.parentNode.parentNode;
    var cell = tr.cells[1];
    cell.innerHTML = document.getElementById("name").value;
    var cell = tr.cells[2];
    cell.innerHTML = document.getElementById("age").value;
    var cell = tr.cells[3];
    cell.innerHTML = document.getElementById("sex").value;
    var cell = tr.cells[4];
    cell.innerHTML = document.getElementById("number").value;
    var cell = tr.cells[5];
    cell.innerHTML = document.getElementById("addres").value;
    tt = null;
  }
}

function add() {
  document.getElementById("name").value = "";

  document.getElementById("age").value = "";

  document.getElementById("sex").value = "";

  document.getElementById("number").value = "";

  document.getElementById("addres").value = "";
  yy = 1;
}
function add1() {
  var ta = document.getElementById("t0");
  var tr = ta.insertRow(1);
  var cell0 = tr.insertCell(0);
  cell0.innerHTML = "<input type='checkbox' name='chk' />";
  var cell1 = tr.insertCell(1);
  cell1.innerHTML = document.getElementById("name").value;
  var cell2 = tr.insertCell(2);
  cell2.innerHTML = document.getElementById("age").value;
  var cell3 = tr.insertCell(3);
  cell3.innerHTML = document.getElementById("sex").value;
  var cell4 = tr.insertCell(4);
  cell4.innerHTML = document.getElementById("number").value;
  var cell5 = tr.insertCell(5);
  cell5.innerHTML = document.getElementById("addres").value;
  var cell6 = tr.insertCell(6);
  cell6.innerHTML =
    "<input type='button' value='编辑' onclick='act1(this)'/> <input type='button' value='删除' onclick='del(this)' />";
}
function act() {
  document.querySelector(".main").classList.toggle("active");
  add();
}
function act1(btn) {
  document.querySelector(".main").classList.toggle("active");
  update(btn);
}
function act2(btn) {
  document.querySelector(".main").classList.toggle("active");
  if (tt != null) {
    update2(btn);
    return;
  }
  if (yy == 1) {
    add1();
    yy == 0;
    return;
  }
}
function act3() {
  document.querySelector(".main").classList.toggle("active");
}
function choosedel() {
  var ta = document.getElementById("t0");
  var chks = document.getElementsByName("chk");

  for (var i = 1; i < chks.length; i++) {
    if (chks[i].checked) {
      ta.deleteRow(i);
      i--;
    }
  }
  chks[0].checked = false;
}
function chooseall() {
  var ta = document.getElementById("ck");
  var chks = document.getElementsByName("chk");
  if (ck.checked) {
    for (var i = 0; i < chks.length; i++) {
      chks[i].checked = true;
    }
  } else {
    for (var i = 0; i < chks.length; i++) {
      chks[i].checked = false;
    }
  }
}
