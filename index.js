/* these errors are OMEGA stupid
just ignore them
i dont know why they exist at all*/

let buttonPresses = 0;
let buttonPresses2 = 0;
function clickButton() {
  console.log("BRUH");
  buttonPresses++;
  console.log(`you've pressed the BRUH button ${buttonPresses} times. bruh`);
}

function clickButtonElectricBoogaloo(log, name) {
  console.log(log);
  buttonPresses2++;
  console.log(`you've pressed the ${name} button ${buttonPresses2} times`);
}

function clearPageWithString(string) {
  document.write(string);
  console.log("Page Cleared");
}
