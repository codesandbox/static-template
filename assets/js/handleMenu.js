// import { menu } from "./menu.js";
import songs0 from "./songs.js";
import songs1 from "./songs1.js";
import songs2 from "./songs2.js";
import { onPauseHandle } from "./handleEvent.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const infoHtml = `<div class="info-header">
<button class="menu-back-btn">
  <i class="fa-solid fa-chevron-left"></i>
</button>
<span class="menu-title">Info</span>
</div>
<div class="info">
<div class="user-img">
  <img src="./assets/images/avatar.jpg" alt="" />
</div>
<p class="user-name">Nguyen Huu Dat</p>
<p class="user-jobs">Font-End dev</p>
<span class="user-graduate">Can Tho University</span>
<div class="user-contact">
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-github"></i>
  <i class="fa-solid fa-envelope"></i>
</div>
</div>`;
const menuList = $(".menu-list");
const stockMenuList = menuList.innerHTML;

export const HandleGoBack = (_this) => {
  let goBackBtn = $(".menu-back-btn");
  console.log("handle go back");

  goBackBtn.onclick = () => {
    menuList.innerHTML = stockMenuList;
    handleCLick(_this);
    _this.setSettings();
  };
};
const handleCLick = (_this) => {
  console.log("handleMenu");
  // console.log(_this);
  const switchBtn = $(".switch");
  const songListSelect = $("#songListSelect");
  const toggleInfoBtn = $(".toggle-info");
  const player = $(".player");
  toggleInfoBtn.onclick = (e) => {
    menuList.innerHTML = infoHtml;
    HandleGoBack(_this);
  };

  // dark mode
  switchBtn.onclick = () => {
    _this.isDark = !_this.isDark;
    _this.setConfig("isDark", _this.isDark);
    switchBtn.classList.toggle("dark", _this.isDark);
    player.classList.toggle("dark", _this.isDark);
  };
  // playlist select
  songListSelect.onchange = (e) => {
    const loadSongs = () => {
      onPauseHandle(_this);
      _this.updatePath();
      _this.render();
      _this.loadCurrentSong();
      _this.handlEvents();
    };
    switch (e.target.value) {
      case "pmq":
        _this.songs = songs1;
        _this.setConfig("lastPlayList", "songs1");

        break;
      case "ngocmai":
        _this.songs = songs2;
        _this.setConfig("lastPlayList", "songs2");
        break;
      default:
        _this.songs = songs0;
        _this.setConfig("lastPlayList", "songs0");
        break;
    }
    loadSongs();
  };
};
const handleMenu = function () {
  const _this = this;
  handleCLick(_this);
};

export default handleMenu;
