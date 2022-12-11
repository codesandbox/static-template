import songs from "./js/songs.js";
import { LOCALSTORAGE_KEY } from "./js/constant.js";
import handlEvents from "./js/handleEvent.js";
import {
  updatePath,
  sortSongs,
  loadConfig,
  render,
  nextSong,
  prevSong,
  randomSong,
  loadCurrentSong,
  loadSettings,
  setSettings
  // renderMenu
} from "./js/actions.js";
import handleMenu, { HandleGoBack } from "./js/handleMenu.js";

const app = {
  currentIndex: 0,
  volume: 0.5,
  isRepeat: false,
  isRandom: false,
  isPlaying: false,
  isDark: false,
  lastPlayList: "",
  config: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {},
  //songs
  songs: songs,
  setConfig: function (key, value) {
    this.config[key] = value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.config));
  },
  // defineProperties: function () {
  //   Object.defineProperty(this, "currentSong", {
  //     get: function () {
  //       return this.songs[this.currentIndex];
  //     }
  //   });
  //   Object.defineProperty(this, "songsLength", {
  //     get: function () {
  //       return this.songs.length;
  //     }
  //   });
  // },

  //actions
  updatePath,
  sortSongs,
  loadConfig,
  render,
  nextSong,
  prevSong,
  randomSong,
  loadCurrentSong,
  loadSettings,
  setSettings,
  handleMenu,
  HandleGoBack,
  handlEvents: handlEvents,

  start: function () {
    this.loadConfig();

    this.updatePath();

    // this.sortSongs();

    this.render();

    // this.defineProperties();
    this.loadCurrentSong();

    this.handlEvents();

    this.handleMenu();

    this.setSettings();
  }
};

app.start();
