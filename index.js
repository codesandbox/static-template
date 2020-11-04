let x = document.getElementById("num");
const displayRandomNumber = () => {
  console.log("clicked");
  //let number = Math.random();
  x.innerHTML = getRandomNumber(-20, 20);
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
