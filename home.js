import { search, getPlaylist } from "./modules/spotify.js";

const searchWrapper = document.querySelector(".search-input");

let baseUrl = (function () {
  return window.location.origin === "file://"
    ? "file:///Users/kishansripada/Documents/Dev/rapTabs"
    : window.location.origin;
})();

console.log(baseUrl);
// if user press any key and release
searchWrapper.querySelector("input").onkeyup = (e) => {
  let userData = e.target.value; //user entered data
  console.log(userData);

  if (userData === "") {
    searchWrapper.classList.remove("active");
  } else {
    searchWrapper.classList.add("active");
    search(userData, ["track"], 4).then((data) => {
      document.querySelector(".autocom-box").innerHTML = "";
      data.tracks.items.forEach((track) => {
        let newElement = document.createElement("li");
        newElement.innerHTML = `<a href="${baseUrl}/track.html?track=${track.id}">${track.name}</a><li style="font-size: 10px">${track.artists[0].name}</li>`;

        document.querySelector(".autocom-box").appendChild(newElement);
      });
    });
  }
};

// gets rap caviar
getPlaylist("37i9dQZF1DX0XUsuxWHRQd").then((data) => {
  console.log(data);
  data[1][0].forEach((track) => {
    let newTrack = document.createElement("div");
    newTrack.setAttribute("style", "height:70px;");
    newTrack.innerHTML = `<p style="font-size:20px">${track.track.name}</p><p>${track.track.artists[0].name}</p><a style="float: right;" href="${baseUrl}/track.html?track=${track.track.id}">View tab</a>`;
    document.querySelector("#main-playlist").appendChild(newTrack);
  });
});
