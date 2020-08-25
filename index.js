document.getElementById("temp").setAttribute("value", 10);
const getTemp = () => {
  let temp = document.getElementById("temp").value;
  temp = parseFloat(temp);

  if (isNaN(temp)) {
    console.log("Not a valid input");
    return -1;
  }

  return temp;
};

const printOutput = (format, result) => {
  let resultText = `The temperature in ${format} is ${result}`;
  document.getElementById("result").innerHTML = resultText;
};

const convertToCelsius = () => {
  let temp = getTemp();
  if (temp === -1) return;
  let result = +(((temp - 32) * 5) / 9).toFixed(2);

  printOutput("Celsius", result);
};

const convertToFahrenheit = () => {
  let temp = getTemp();
  if (temp === -1) return;

  let result = +((9 / 5) * temp + 32).toFixed(2);

  printOutput("Fahrenheit", result);
};
