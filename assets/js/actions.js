import {
  songlist,
  randomBtn,
  rePeatBtn,
  player,
  switchBtn,
  songListSelect
} from "./constant.js";
import { menu } from "./menu.js";
import songs1 from "./songs1.js";
import songs2 from "./songs2.js";

const songs = {
  songs1,
  songs2
};

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export const updatePath = function () {
  let toDay = new Date().getDay();
  let newSongs = this.songs.map((song) => {
    return { ...song, path: song.path.replace("/1/", `/${toDay}/`) };
  });
  this.songs = newSongs;
};
export const sortSongs = function () {
  var sortedSongs = this.songs.sort((a, b) => {
    return a.name > b.name;
  });
  this.songs = sortedSongs;
};
export const loadConfig = function () {
  this.isRandom = this.config.isRandom;
  this.isRepeat = this.config.isRepeat;
  this.isDark = this.config.isDark;
  if (this.config.lastPlayList) {
    this.lastPlayList = this.config.lastPlayList;
    if (this.config.lastPlayList !== "songs0")
      this.songs = songs[this.config.lastPlayList];
  }
};
export const loadSettings = () => {
  console.log("loadsettings");
};
export const render = function () {
  let html = "";
  this.songs.map((song, index) => {
    html += `<li class="song-item" id="${index}">
          <div class="song-frame">
            <div class="song-img" style="background-image: url(${song.image})" >
            </div>
          </div>
          <div class="song-info">
            <h2>${song.name}</h2>
            <h4>${song.singer}</h4>
          </div>
          <div class="song-detail">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </li>`;
  });
  songlist.innerHTML = html;
};
export const nextSong = function () {
  this.currentIndex =
    this.currentIndex < this.songs.length - 1 ? this.currentIndex + 1 : 0;
  // console.log(this.currentIndex);
  this.loadCurrentSong();
};
export const prevSong = function () {
  this.currentIndex =
    this.currentIndex > 0 ? this.currentIndex - 1 : this.songs.length - 1;
  this.loadCurrentSong();
};
export const randomSong = function () {
  let newIndex = 0;
  do {
    newIndex = Math.floor(this.songs.length * Math.random());
  } while (newIndex === this.currentIndex);
  this.currentIndex = newIndex;
  this.loadCurrentSong();
};
export const loadCurrentSong = function () {
  let singer = $(".dashboard h4");
  let title = $(".dashboard h2");
  let cd = $(".cd-img");
  let audio = $(".audio");
  singer.textContent = this.songs[this.currentIndex].singer;
  title.textContent = this.songs[this.currentIndex].name;
  cd.style.backgroundImage = `url(${this.songs[this.currentIndex].image})`;
  audio.src = this.songs[this.currentIndex].path;
  document.title = this.songs[this.currentIndex].name;
};
export const setSettings = function () {
  console.log("set settings");

  // cấu hình trình phát
  randomBtn.classList.toggle("active", this.isRandom);
  rePeatBtn.classList.toggle("active", this.isRepeat);
  //cấu hình dark mode
  player.classList.toggle("dark", this.isDark);
  switchBtn.classList.toggle("dark", this.isDark);
  // cấu hình option playlist
  const option = this.lastPlayList[this.lastPlayList.length - 1];
  console.log(option);

  songListSelect.options[option].selected = true;
};
export const renderMenu = function () {
  let menuList = $(".menu-list");
  let html = "";
  menu.map((item) => {
    html += `
    <li class="list-item ${
      item.hasChildren ? "hasChild" : ""
    }"><span href="#">${item.title}</span></li>
    `;
  });
  menuList.innerHTML = html;
};
