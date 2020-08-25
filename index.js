const convert = () => {
  let byte = document.getElementById("number").value;
  let gb = byte / 1073741824;
  let gb1 = gb.toPrecision(4);
  document.getElementById("result").innerHTML = gb1;
};
