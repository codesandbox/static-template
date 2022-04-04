// classical function vs arrow functions
function getName(a, b = 5) {
  console.log(a, b);
}
getName(2);

getName1 = (a, b = 5) => {
  console.log(a, b);
};
getName1(2);

function getMessage() {
  console.log("This is a normal function");
}
getMessage();

getMessage1 = () => {
  console.log("This is a arrow function");
};
getMessage1();

getMessage2 = () => "Hey I'm a cooler function now";
console.log(getMessage2);

getMessage3 = (k) => "Hey I'm a cooler function now " + k;
console.log(getMessage3(55));

getMessage4 = (k1, k2) => "Hey I'm a cooler function now " + k1 + k2;
console.log(getMessage4(45, 78));

getMessage5 = () => "Hey I'm a cooler function ";
("Hi buddy");
console.log(getMessage5());
