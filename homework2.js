const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 }
];

function showmsg(array) {
  result = "";
  for (let i = 0; i < array.length; i++) {
    result +=
      "quantity: " +
      array[i].quantity +
      ", " +
      "price: " +
      array[i].price +
      "<br />";
  }
  return result;
}

//show the original Array
let result = "<h3>The Origin Array is: </h3>";
result += showmsg(itemsObject);
document.write(result);

//function1
function Function1() {
  let result = "<h3>The Result Array of Function_1 is : </h3>";

  //Use a loop
  let array_1 = [];
  for (let i = 0; i < itemsObject.length; i++) {
    array_1.push({
      quantity: itemsObject[i].quantity * 2,
      price: itemsObject[i].price * 2
    });
  }
  result += showmsg(array_1);

  document.getElementById("result_1").innerHTML = result;
}

//function2
function function2() {
  let result = "<h3>The Result Array of Function_2 is: </h3>";

  //Use a loop
  let array_2 = [];
  for (let i = 0; i < itemsObject.length; i++) {
    if (itemsObject[i].quantity > 2 && itemsObject[i].price > 300) {
      array_2.push({
        quantity: itemsObject[i].quantity,
        price: itemsObject[i].price
      });
    }
  }
  result += showmsg(array_2);

  document.getElementById("result_2").innerHTML = result;
}

//Function3
function function3() {
  result = "<h3>The Result Array of Function_3 is: </h3>";

  //Use a loop
  let array_3 = [];
  for (let i = 0; i < itemsObject.length; i++) {
    array_3.push({ value: itemsObject[i].quantity * itemsObject[i].price });
  }
  for (let i = 0; i < array_3.length; i++) {
    result += "itemvalue: " + array_3[i].value + "<br />";
  }
  let totalvalue = 0;
  for (let i = 0; i < array_3[i].length; i++) {
    totalvalue += array_3[i].value;
  }
  result += "<b />totalvalue: " + totalvalue + "<br />";

  document.getElementById("result_3").innerHTML = result;
}

//parse String
const string =
  "Perhaps The Easiest-to-understand Case For Reduce Is To Return\
	The Sum Of All The Elements In An Array ";

function string_parse() {
  //change all the Non-alphabetic CharacterData into Blank("")
  let str_parse = string.replace(/[^a-zA-Z]/g, "");

  //change all uppercase CharacterData into lowerCase
  str_parse = str_parse.toLowerCase();

  //what showed blow were two-lines results
  result = "<h3> The Parse result of the string is: </h3>";

  result += str_parse + "<br />";
  document.getElementById("str_par").innerHTML = result;
}
