let gArr = [];
let gArr_a = [];
let gArr_b = [];
let gArr_c = [];
let gArr_d = [];
let gArr_e = [];

const getData = async () => {
  const req = await fetch(
    "https://api.imgur.com/3/gallery/top/?showViral=true&mature=true&album_previews=true",
    {
      method: "GET",
      headers: { Authorization: "Client-ID 414496012eaf87e" }
    }
  );
  const { data } = await req.json();
  console.log(data);

  gArr.push(...data);

  splitToSubarray(gArr);

  showData(gArr_a, gArr_b, gArr_c, gArr_d, gArr_e);
};

const splitToSubarray = (arr) => {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (count == 1) {
      gArr_a.push(arr[i]);
      count++;
    } else if (count == 2) {
      gArr_b.push(arr[i]);
      count++;
    } else if (count == 3) {
      gArr_c.push(arr[i]);
      count++;
    } else if (count == 4) {
      gArr_d.push(arr[i]);
      count++;
    } else if (count == 5) {
      gArr_e.push(arr[i]);
      count = 1;
    }
  }

  console.log("gArr_a", gArr_a);
  console.log("gArr_b", gArr_b);
  console.log("gArr_c", gArr_c);
  console.log("gArr_d", gArr_d);
  console.log("gArr_e", gArr_e);
};

window.addEventListener("load", () => {
  getData();
});

console.log("gArr outside ", gArr, gArr.length);

const showData = (gArr_a, gArr_b, gArr_c, gArr_d, gArr_e) => {
  const displayBoxA = document.getElementById("displayBoxA");
  const displayBoxB = document.getElementById("displayBoxB");
  const displayBoxE = document.getElementById("displayBoxE");
  const displayBoxC = document.getElementById("displayBoxC");
  const displayBoxD = document.getElementById("displayBoxD");

  const showData_Single = (myArr, parent) => {
    myArr.map((a, i) => {
      let img;
      if (a.images !== undefined) {
        img = a.images[0].link;
      } else {
        img = a.link;
      }

      let splitImg = img.split(".")[3];

      console.log(i, img, splitImg);

      let media;
      if (splitImg == "mp4") {
        media = ` <video id="cardVdo" class="img" src="${img}" autoplay="autoplay" controls muted > </video> `;
      } else {
        media = ` <img class="img" src="${img}">`;
      }

      const card = document.createElement("div");
      card.className = "card";
      card.style.border =
        "3px solid rgb(" +
        Math.floor(Math.random() * (255 - 0 + 1) + 0) +
        "," +
        Math.floor(Math.random() * (255 - 0 + 1) + 0) +
        "," +
        Math.floor(Math.random() * (255 - 0 + 1) + 0) +
        ")";
      card.innerHTML = `
            ${media}
            <h3>${a.title}</h3>
            <div class="linkes-comment">
                 <div class="Vote Vote-up"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>
                  ${a.ups}
                 </div>

                 <div class="Media Post-item-stat uScaleTransition"><svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg>
                  ${a.comment_count}
                 </div>

                 <div class="Media Post-item-stat uScaleTransition"><svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>
                  ${a.views}
                 </div>
            </div>
          `;
      parent.append(card);
    });
  };

  showData_Single(gArr_a, displayBoxA);
  showData_Single(gArr_b, displayBoxB);
  showData_Single(gArr_c, displayBoxC);
  showData_Single(gArr_d, displayBoxD);
  showData_Single(gArr_e, displayBoxE);
};

// =================================== debouncing

document
  .getElementById("searchInput")
  .addEventListener("keyup", () => debounce(getName, 300));

let bomb;
const debounce = (fun, delay) => {
  clearTimeout(bomb);
  bomb = setTimeout(() => {
    fun();
  }, delay);
};

const getName = () => {
  let name = document.getElementById("searchInput").value;
  console.log("debounce", name);

  const filter = gArr.filter((a) => {
    if (a.title.indexOf(name) !== -1) {
      return a;
    }
  });

  console.log(filter);

  const debounceBox = document.getElementById("debounceBox");
  debounceBox.innerHTML = null;

  if (name.length == 0) {
    debounceBox.innerHTML = null;
  } else if (filter.length == 0) {
    const p = document.createElement("div");
    p.className = "p";
    p.innerHTML = "No data available";
    debounceBox.append(p);
  } else {
    filter.map((a) => {
      let title = a.title;
      if (title.length >= 40) {
        title = title.substring(0, 40).trim() + "......";
      }
      const p = document.createElement("div");
      p.className = "p";
      p.innerHTML = title;
      p.addEventListener("click", () => {
        appyDebounce(title);
      });
      debounceBox.append(p);
    });
  }
};

const appyDebounce = (title) => {
  document.getElementById("searchInput").value = title;

  document.getElementById("debounceBox").innerHTML = null;
};

// ------------------------------------ nav bar scroll
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    document.getElementById("nav").style.backgroundImage = `url(
      "https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png")`;
  } else {
    document.getElementById("nav").style.background = "transparent";
  }
}
