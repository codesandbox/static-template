
let v = 0;

let 
const controlLed = () => {
  v = v === 0 ? 1 : 0;
  let ledView = document.getElementById("ledView");
  ledView.style.backgroundColor = v === 1 ? "red" : "black";
};

const mainFunction = () => {
  const onoff = document.getElementById("onoff");
  onoff.onclick = controlLed;
  const connectButton = document.getElementById("connect");
  connectButton.onclick = connect;
};



window.onload = mainFunction;
