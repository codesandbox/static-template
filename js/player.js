window.onload = () => customPlayer();

const customPlayer = () => {
  document.querySelector("#btn-play").onclick = (e) => {
    e.preventDefault();
    if (document.querySelector(".video").classList.contains("paused")) {
      document.querySelector(".video video").pause();
      document.querySelector(".video video").currentTime = 0;
      document.querySelector(".video video").removeAttribute("loop");
      document.querySelector(".video video").removeAttribute("muted");
      document.querySelector(".video video").removeAttribute("autoplay");
      document.querySelector(".video").classList.remove("paused");
      document.querySelector(".video").classList.add("played");
      setTimeout(() => document.querySelector(".video video").play(), 1000);
    } else {
      document.querySelector(".video video").pause();
      document.querySelector(".video video").currentTime = 0;
      document.querySelector(".video").classList.add("paused");
      document.querySelector(".video").classList.remove("played");
      setTimeout(() => {
        document.querySelector(".video video").toggleAttribute("loop");
        document.querySelector(".video video").toggleAttribute("muted");
        document.querySelector(".video video").toggleAttribute("autoplay");
        document.querySelector(".video video").play();
      }, 1000);
    }
  };
};
