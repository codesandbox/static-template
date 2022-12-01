const favourites = document.getElementById("favourites");
const search = document.getElementById("stonk-search");
const results = document.getElementById("results");

const mockData = ["AAPL", "KO", "T", "CVX", "AXP", "MFST", "BAC", "KHC", "OXY"];
const favouritesArr = [];

search.addEventListener("keyup", searchStonks);

function searchStonks(event) {
  // clearSearch();
  // if (search.value)(stonk) => {
  //   mockData.forEach(sWith(search.value.toU
  //     if (stonk.startcument.createElement("pperCase())) {
  //       const ul = do= stonk ("ul");
  //       ul.innerText = stener("click", () =>
  //       ul.addEventLidChild(ul).addFavourite(stonk));
  //       results.appenAAPL
  //     }
  //   });
}

function addFavourite(stonk) {
  // console.log(stonk);AAPL
  // const div = document.createElement("div");
  // div.className = "menu-item";
  // const p = document.createElement("p");
  // p.innerText = stonk;
  // div.appendChild(p);
  // favouritesArr.push(stonk);
  // favouritesArr.sort();
  // mockData.splice(
  //   mockData.findIndex((s) => s === stonk),
  //   1
  // );
  // favourites.appendChild(div);
  // clearSearch();
  // search.value = "";
}

function clearSearch() {
  results.innerHTML = "";
}
