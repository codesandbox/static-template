const getinput = () => {
  let size = document.getElementById("memory-size").value;
  size = parseFloat(size);
  if (isNaN(size)) {
    console.log("Not a valid input");
    return -1;
  }
  return size;
};
const printOutput = (format, result) => {
  let result1 = `The memory size in ${format} is ${result}`;

  document.getElementById("result").innerHTML = result1;
};
const convertTOBytes = () => {
  let number = getinput();
  if (number === -1) return;
  let result = number / 8;
  printOutput("Byte", result);
};
const convertTOGB = () => {
  let number = getinput();
  if (number === -1) return;
  let result = number / (8 * 1000000000);
  printOutput("GB", result);
};
