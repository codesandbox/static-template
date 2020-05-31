console.log('main.js is running.');

function init() {
  console.log('Run after window load');
}

const testBtn1 = () => {
  console.log('clicked Test Button 1');
  outputToTestZone('1');
};

document.querySelector('#testBtn2').onclick = () => {
  console.log('clicked Test Button 2');
  outputToTestZone('2');
};

document.getElementById('testBtn3').addEventListener('click', () => {
  console.log('clicked Test Button 3');
  outputToTestZone('3');
});

const outputToTestZone = number => {
  document.getElementById('testZone').innerHTML =
    'Test Button ' + number + ' was clicked';
};

window.onload = init;
