window.addEventListener("DOMContentLoaded", () => {
  const description = document.querySelector(".description"),
    x = document.querySelector(".button-description"),
    logo = document.querySelector(".footer-logo"),
    tabParent = document.querySelector(".header-menu"),
    tabs = document.querySelectorAll(".menu-link"),
    content = document.querySelectorAll(".content"),
    modal = document.querySelector("#modal"),
    hide = document.querySelector(".hide");

  x.style.display = "none";
  description.style.display = "none";

  logo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Tabs
  function hideContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
  }
  function showContent(i = 0) {
    content[i].style.display = "block";
    tabs[i].classList.add("active");
  }

  hideContent();
  showContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("menu-link")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });

  //Modal
  function hideModal() {
    modal.style.display = "none";
    // modal.classList.remove("modal");
  }
  hide.addEventListener("click", hideModal);

  const deadline = "2023-12-31";

  function getTime(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t < 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num <= 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock(); // убирает мигание даты по дефолту при перезагрузке

    function updateClock() {
      const t = getTime(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);

  //Tabs Contents
  class ProcessCard {
    constructor(src, alt, title, descr, perentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.parentDiv = document.querySelector(perentSelector);
    }
    render() {
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="how-we-make-box">
              <img
                class="box-img"
                src=${this.src}
                alt=${this.alt}
              />
              <h3 class="title box-title">${this.title}</h3>
              <span class="box-text"
                >${this.descr}</span
              >
            </div>
      `;
      this.parentDiv.append(element);
    }
  }
  new ProcessCard(
    "icon/target.png",
    "target icon",
    "SET a target",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    ".content .how-we-make-container"
  ).render();
  new ProcessCard(
    "icon/design.png",
    "design icon",
    "design a solution",
    "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    ".content .how-we-make-container"
  ).render();
  new ProcessCard(
    "icon/track.png",
    "track icon",
    "track the progress",
    "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere",
    ".content .how-we-make-container"
  ).render();
});
