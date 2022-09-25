"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v3.1/name/");
request.send();
console.log(request.responseText);
