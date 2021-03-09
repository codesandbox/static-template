const allItems = document.querySelectorAll("[data-item]");
const cakes = document.querySelectorAll('[data-item= "cakes"]');
const cupcakes = document.querySelectorAll('[data-item= "cupcakes"]');
const sweets = document.querySelectorAll('[data-item= "sweets"]');
const doughnuts = document.querySelectorAll('[data-item= "dougnuts"]');
const storeItems = document.querySelector("#store-items");

const allItemsBtn = document.querySelector('[data-filter= "all"]');
const cakesBtn = document.querySelector('[data-filter= "cakes"]');
const cupcakesBtn = document.querySelector('[data-filter= "cupcakes"]');
const sweetsBtn = document.querySelector('[data-filter= "sweets"]');
const doughnutsBtn = document.querySelector('[data-filter= "doughnuts"]');

function showAll(e) {
  storeItems.innerHTML = "";
  for (let i = 0; i < allItems.length; i++) {
    storeItems.insertAdjacentElement("beforeend", allItems[i]);
  }
  e.preventDefault();
}

function showCakes(e) {
  storeItems.innerHTML = "";

  for (let i = 0; i < cakes.length; i++) {
    storeItems.insertAdjacentElement("beforeend", cakes[i]);
  }
  e.preventDefault();
}

function showCupcakes(e) {
  storeItems.innerHTML = "";

  for (let i = 0; i < cupcakes.length; i++) {
    storeItems.insertAdjacentElement("beforeend", cupcakes[i]);
  }
  e.preventDefault();
}

function showSweets(e) {
  storeItems.innerHTML = "";

  for (let i = 0; i < sweets.length; i++) {
    storeItems.insertAdjacentElement("beforeend", sweets[i]);
  }
  e.preventDefault();
}

function showDoughnuts(e) {
  storeItems.innerHTML = "";
  for (let i = 0; i < doughnuts.length; i++) {
    storeItems.insertAdjacentElement("beforeend", doughnuts[i]);
  }
  e.preventDefault();
}

allItemsBtn.addEventListener("click", showAll);
cakesBtn.addEventListener("click", showCakes);
cupcakesBtn.addEventListener("click", showCupcakes);
sweetsBtn.addEventListener("click", showSweets);
doughnutsBtn.addEventListener("click", showDoughnuts);

let searchInput = document.querySelector("#search-item");
let eachStoreItem = document.querySelectorAll('.store-item');



let itemName = document.querySelectorAll(".store-item-name");


searchInput.addEventListener("input", showMatches);

function showMatches(e) {
  storeItems.innerHTML = "";
let searchInputVal = searchInput.value.toLowerCase();


for(let i=0; i < eachStoreItem.length; i++) {
  let currentItem = itemName[i].innerText.toLowerCase();
  if (currentItem.search(searchInputVal) > -1 ) {
    console.log(i);
    storeItems.insertAdjacentElement("beforeend", eachStoreItem[i]);

  }
  

}
  e.preventDefault();
}
