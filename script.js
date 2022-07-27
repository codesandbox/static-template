class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "dgagsd";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const themes = [
  {
    color: "FD4127",
    favicon:
      "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/Favicon/Orange.png",
    assets: [
      {
        name: "brick",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Orange.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Orange.mov"
      },
      {
        name: "v",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Orange.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Orange.mov"
      },
      {
        name: "logo",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Orange.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Orange.mov"
      },
      {
        name: "brick_case",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Orange.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Orange.mov"
      },
      {
        name: "contact",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Orange.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Orange.mov"
      }
    ]
  },
  {
    color: "39CF7D",
    favicon:
      "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/Favicon/Green.png",
    assets: [
      {
        name: "brick",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Green.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Green.mov"
      },
      {
        name: "v",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Green.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Green.mov"
      },
      {
        name: "logo",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Green.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Green.mov"
      },
      {
        name: "brick_case",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Green.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Green.mov"
      },
      {
        name: "contact",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Green.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Green.mov"
      }
    ]
  },
  {
    color: "FD2727",
    favicon:
      "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/Favicon/Red.png",
    assets: [
      {
        name: "brick",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Red.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Red.mov"
      },
      {
        name: "v",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Red.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Red.mov"
      },
      {
        name: "logo",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Red.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Red.mov"
      },
      {
        name: "brick_case",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Red.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Red.mov"
      },
      {
        name: "contact",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Red.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Red.mov"
      }
    ]
  },
  {
    color: "FFD600",
    favicon:
      "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/Favicon/Yellow.png",
    assets: [
      {
        name: "brick",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Yellow.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Yellow.mov"
      },
      {
        name: "v",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Yellow.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Yellow.mov"
      },
      {
        name: "logo",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Yellow.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Yellow.mov"
      },
      {
        name: "brick_case",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Yellow.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Yellow.mov"
      },
      {
        name: "contact",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Yellow.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Yellow.mov"
      }
    ]
  },
  {
    color: "3970fd",
    favicon:
      "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/Favicon/Blue.png",
    assets: [
      {
        name: "brick",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Blue.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Brick/Blue.mov"
      },
      {
        name: "v",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Blue.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/V/Blue.mov"
      },
      {
        name: "logo",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Blue.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Logo/Blue.mov"
      },
      {
        name: "brick_case",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Blue.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/BrickCase/Blue.mov"
      },
      {
        name: "contact",
        webm:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Blue.webm",
        hevc:
          "https://moonbase.nyc3.cdn.digitaloceanspaces.com/LVDV/3D/Contact/Blue.mov"
      }
    ]
  }
];

const theme = {
  set current(value) {
    Cookies.set("current-theme", value);
  },
  get current() {
    return Cookies.get("current-theme");
  }
};

function initialSetTheme() {
  if (!theme.current) {
    setTheme(0);
    // no init needed, loads as orange initially
  } else {
    setTheme(theme.current);
    // set theme colors everywhere
  }
}

initialSetTheme();

function setTheme(i) {
  //  SET IN COOKIES
  theme.current = i;
  document.querySelectorAll(".div-block-12").forEach((el) => {
    el.style.backgroundColor = "#" + themes[i].color;
  });

  setTimeout(function () {
    var link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = themes[theme.current].favicon;
    document.getElementsByTagName("head")[0].appendChild(link);

    document.querySelectorAll("#hero-logo").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[2].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[2].hevc;
        videoEl.play();
      }
    });

    document.querySelectorAll("#brick-case").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[3].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[3].hevc;
        videoEl.play();
      }
    });

    document.querySelectorAll("#about-logo").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[1].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[1].hevc;
        videoEl.play();
      }
    });

    document.querySelectorAll("#contact").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[4].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[4].hevc;
        videoEl.play();
      }
    });

    document.querySelectorAll("[theme-set='bg']").forEach((el) => {
      el.style.backgroundColor = "#" + themes[i].color;
    });

    document.querySelectorAll(".roadmap-road").forEach((el) => {
      el.style.backgroundColor = "#" + themes[i].color;
    });

    //  ROADMAP ASSETS

    document.querySelectorAll("#roadmap-brick").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[0].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[0].hevc;
        videoEl.play();
      }
    });

    document.querySelectorAll("#roadmap-brick-case").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[3].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[3].hevc;
        videoEl.play();
      }
    });

    document.querySelectorAll("#roadmap-v").forEach((videoEl) => {
      if (!supportsH265()) {
        videoEl.src = themes[theme.current].assets[1].webm;
        videoEl.play();
      } else {
        videoEl.src = themes[theme.current].assets[1].hevc;
        videoEl.play();
      }
    });

    //  ROADMAP ASSETS

    document.querySelectorAll("[theme-set='foreground']").forEach((el) => {
      el.style.color = "#" + themes[i].color;
    });

    let lottie = Webflow.require("lottie").lottie;
    let animations = lottie.getRegisteredAnimations();

    animations.forEach((el, i) => {
      if (i == theme.current) {
        // el.stop();
        el.setDirection(-1);
        el.play();
      } else {
        el.setDirection(1);
        el.play();
      }
    });

    document
      .querySelector(".footer__color-switch-container")
      .classList.add("loading");

    setTimeout(function () {
      document
        .querySelector(".footer__color-switch-container")
        .classList.remove("loading");

      // document.querySelector("#close-preloader").click();
      document.querySelector("body").classList.remove("disabled");
    }, 1000);
  }, 800);
}

document.querySelectorAll(".footer__color-switch").forEach((el, i) => {
  el.addEventListener("click", function () {
    setTimeout(function () {
      if (theme.current != i) setTheme(i);
    }, 0);
    // DISABLE BUTTONS DURING ANIMATION
  });
});

function supportsH265() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// typing animation

let initialLoad = false;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && initialLoad == false) {
        loadText();
        initialLoad = true;
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(document.querySelector(".section__3"));

let roadmapDescs = document.querySelectorAll(".text-block-7");

function loadText() {
  roadmapDescs.forEach((el, i) => {
    let phrase = phrases[i];
    const fx = new TextScramble(el);
    fx.setText(phrase);
  });
}

roadmapDescs.forEach((el) => {
  el.innerHTML = "";
});

const phrases = [
  "LIVEVLONEDIEVLONE Membership NFT Mint",
  "Exclusive STFO Brick Physical Lifestyle Product Claim",
  "MORE TO COME, WE'RE JUST GETTING STARTED",
  "STFO BRICK NFT CLAIM",
  "EXCLUSIVE STFO PHYSICAL & DIGITAL FASHION DROP"
];

// load hero text

// let heroEl = document.querySelector(".hero-paragraph");
// let fx2 = new TextScramble(heroEl);

// let hh = heroEl.clientHeight;
// console.log(`${hh}px`);
// // heroEl.style.height = `${hh}px`;
// // heroEl.innerHTML = "";

// setTimeout(function () {
//   fx2.setText(
//     "EACH MEMBERSHIP UNLOCKS EXCLUSIVE ACCESS TO PHYSICAL AND DIGITAL LIFESTYLE AND FASHION PRODUCT RELEASES, FUTURE AIRDROPS AND CLAIMS, WHITELIST SPOTS, EXCLUSIVE ARTIST COLLABORATIONS, METAVERSE ACTIVATIONS, REAL-LIFE EVENTS AND MORE."
//   );
//   // setTimeout(function () {
//   //   heroEl.style.height = `auto`;
//   // }, 5000);
// }, 3000);

// load text 2

// const observer2 = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && initialLoad == false) {
//         // loadText();
//         // initialLoad = true;

//         let fx3 = new TextScramble(document.querySelector(".paragraph-2"));
//         fx3.setText(
//           "EACH MEMBERSHIP UNLOCKS EXCLUSIVE ACCESS TO PHYSICAL AND DIGITAL LIFESTYLE AND FASHION PRODUCT RELEASES, FUTURE AIRDROPS AND CLAIMS, WHITELIST SPOTS, EXCLUSIVE ARTIST COLLABORATIONS, METAVERSE ACTIVATIONS, REAL-LIFE EVENTS AND MORE."
//         );
//       }
//     });
//   },
//   { threshold: 0.1 }
// );

// observer2.observe(document.querySelector(".section__2"));

document.querySelector("body").classList.add("disabled");
