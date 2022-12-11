import {
  dashboard,
  cd,
  cdImg,
  playBtn,
  prevBtn,
  nextBtn,
  randomBtn,
  rePeatBtn,
  player,
  musicVolume,
  switchBtn,
  gotopBtn,
  timeSlider,
  timeSliderCurrent,
  timeSliderHolder,
  volumeSliderCurrent,
  volumeSliderHolder,
  songListSelect
} from "./constant.js";
import { subMenu } from "./menu.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cdWidth = cd.offsetWidth;



const onPauseHandle = function (_this) {
  playBtn.classList.remove("playing");
  _this.isPlaying = false;
  cdImg.style.animationPlayState = "paused";
};

const handlEvents = function () {
  const _this = this;
  const songs = $$(".song-item");
  const audio = $(".audio");
  const isDesktop = window.innerWidth >= 724;
  // console.log(isDesktop);

  if (!isDesktop) musicVolume.remove();

  function scrollToActive(index) {
    setTimeout(() => {
      songs[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 200);
  }
  cdImg.onclick = () => {
    scrollToActive(_this.currentIndex);
  };
  // const volumeHeight = musicVolume.offsetHeight;

  // quay đĩa nhạc
  // không chạy với iphone
  // const cdImgAnimate = cdImg.animate([{ transform: "rotate(360deg)" }], {
  //   duration: 12000,
  //   iterations: Infinity //
  // });

  audio.volume = 1;

  // resize the cd when scroll
  document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const newCdWidth = cdWidth - scrollTop / 2;
    // console.log(isHide)
    // if (newCdWidth < 0) {cd.style.width = 0}
    // else cd.style.width = newCdWidth + 'px'
    cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
    cd.style.opacity = newCdWidth / cdWidth;

    // const newVolumeHeight = volumeHeight - scrollTop / 10;
    // musicVolume.style.height = newVolumeHeight > 0 ? newVolumeHeight + "px" : 0;
    // musicVolume.style.marginTop =
    //   newVolumeHeight > 0 ? newVolumeHeight + "px" : 0;
    // musicVolume.style.opacity = newVolumeHeight / volumeHeight;
    // musicVolume.classList.toggle("hide", !musicVolume.offsetHeight);

    gotopBtn.classList.toggle("show", scrollTop > 400);
  };

  // play song
  function playSong() {
    audio.play();
    _this.isPlaying = true;
    playBtn.classList.add("playing");
  }

  // active song
  function activeSong(index) {
    for (var song of songs) {
      if (song.classList.contains("active")) {
        song.classList.remove("active");
      }
    }
    songs[index].classList.add("active");
    const rect = songs[index].getBoundingClientRect();
    const playerHeight = dashboard.offsetHeight;
    const topCondition = isDesktop ? rect.top > 0 : rect.top > playerHeight;
    const bottomCondition = rect.top < window.innerHeight;

    if (topCondition && bottomCondition) {
      console.log("scroll");
      scrollToActive(_this.currentIndex);
    } else {
      console.log("no scroll");
    }
  }

  // xử lí khi nhạc ngừng (default)
 
  audio.onpause = () => {
    onPauseHandle(_this)
  };
  // or audio.onpause = onPauhandle;

  //xử lí khi nhạc được phát
  const onPlayHandle = function () {
    playBtn.classList.add("playing");
    _this.isPlaying = true;
    cdImg.style.animationPlayState = "running";
    activeSong(_this.currentIndex);
  };
  audio.onplay = onPlayHandle;

  // thanh progress
  audio.ontimeupdate = function () {
    timeSliderCurrent.style.width =
      audio.currentTime / (audio.duration / 100) + "%";
    timeSliderHolder.style.left =
      audio.currentTime / (audio.duration / 100) - 2 + "%";
    //next bài khi hát xong
    if (audio.ended) {
      // chế độ hát repeat
      if (_this.isRepeat) {
        playSong();
        console.log("Reapeat");
        return;
      }
      //chế độ random
      if (_this.isRandom) {
        _this.randomSong(); // currentIndex == ramdom
        playSong();
        return;
      }
      // chế độ phát bình thường
      _this.nextSong(); // currentIndex +1
      playSong();
    }
  };

  // xử lý thanh volume
  musicVolume.onclick = function (e) {
    // console.log(e.target.getBoundingClientRect())
    let playerWidth = musicVolume.offsetWidth;
    let newVolume = (e.clientX - 25) / playerWidth;
    volumeSliderCurrent.style.width = e.clientX - 25 + "px";
    volumeSliderHolder.style.left = e.clientX - 37 + "px";
    audio.volume = newVolume.toFixed(2);
  };
  // xử lý thanh thoi gian
  timeSlider.onclick = (e) => {
    let playerWidth = timeSlider.offsetWidth;
    let newCurrentTime = Math.floor(((e.clientX - 25) / playerWidth) * 100);
    let seektime = (audio.duration * newCurrentTime) / 100;
    audio.currentTime = seektime.toFixed(2);
  };

  // <------- xử lí các nút bấm -------->

  // play button
  playBtn.onclick = function () {
    console.log("click", _this.isPlaying);
    if (_this.isPlaying) {
      audio.pause(); // (default)
    } else {
      audio.play();
    }
  };
  // next song
  nextBtn.onclick = function nextSongHandle() {
    _this.nextSong();
    playSong();
  };

  // prev song
  prevBtn.onclick = function () {
    _this.prevSong();
    playSong();
  };

  // random song
  randomBtn.onclick = function () {
    _this.isRandom = !_this.isRandom;
    _this.setConfig("isRandom", _this.isRandom);
    randomBtn.classList.toggle("active", _this.isRandom);
  };

  //repeat song
  rePeatBtn.onclick = function () {
    _this.isRepeat = !_this.isRepeat;
    _this.setConfig("isRepeat", _this.isRepeat);
    rePeatBtn.classList.toggle("active", _this.isRepeat);
  };

  

  // goto top
  gotopBtn.onclick = () => scrollToActive(0);

  // play song when click
  songs.forEach((song) => {
    song.onclick = (e) => {
      // nếu bấm vào icon detail thi không làm gì
      if (e.target.parentElement.classList.contains("song-detail")) return;
      if (Number(song.id) !== _this.currentIndex) {
        _this.currentIndex = Number(song.id);
        _this.loadCurrentSong();
        playSong();
      } else if (!_this.isPlaying) {
        console.log("play song");
        playSong();
      }
    };
  });

  // menu --->

  
};
export {onPauseHandle};
export default handlEvents;
