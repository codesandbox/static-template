const chevron_circle_right = "./assets/img/svg/chevron-circle-right.svg";
const chevron_small_down = "./assets/img/svg/chevron-small-down.svg";
const horizontal_line = "./assets/img/svg/horizontal-line.svg";
const vertical_line = "./assets/img/svg/vertical-line.svg";

// #region menu
const menu_checkbox = document.querySelector("#menu__box-input");
menu_checkbox.addEventListener("change", function () {
  const nav = document.querySelector(".nav");
  if (this.checked) {
    nav.classList.add("display-initial");
    nav.classList.remove("display-none");
  } else {
    nav.classList.add("display-none");
    nav.classList.remove("display-initial");
  }
});
// #endregion

// #region contactInfo
const arr_contactInfo = [
  {
    id: "location_info",
    img: "./assets/img/svg/location-icon.svg",
    header: "Pay Us a Visit",
    text: "Union St, Seattle, WA 98101, United States",
    link: "https://maps.app.goo.gl/q2TqyJBdPy1E8Pnu7",
    alt: "location icon"
  },
  {
    id: "phone_info",
    img: "./assets/img/svg/phone-call.svg",
    header: "Give Us a Call",
    text: "(110) 1111-1010",
    link: "tel:11011111010",
    alt: "phone icon"
  },
  {
    id: "email_info",
    img: "./assets/img/svg/mail.svg",
    header: "Send Us a Message",
    text: "Contact@HydraVTech.com",
    link: "mailto:Contact@HydraVTech.com",
    alt: "email icon"
  }
];
const id_contactInfo = document.querySelector("#contactInfo_small");
if (id_contactInfo.childElementCount == 0) {
  id_contactInfo.innerHTML = carouselTemplate(
    "change_contactInfo",
    tmpl_contactInfo,
    arr_contactInfo
  );
}
function change_contactInfo(e, isNext) {
  changeItem(e, isNext, tmpl_contactInfo, arr_contactInfo);
}
function tmpl_contactInfo(elem) {
  return `
    <div class="d-flex align-items-center intro__footer_block-small">
        <img src="${elem.img}" alt="${elem.alt}" class="intro__footer-logo">
        <a href="${elem.link}" data-rel="external">
            <p class="intro__footer-text">${elem.text}</p>
        </a>
    </div>`;
}
// #endregion

// #region contactInfo large
document.querySelector("#contactInfo_large").innerHTML = arr_contactInfo
  .map((info, i) => {
    if (arr_contactInfo.length - 1 === i) return fillInfoItem(info);
    else {
      return `${fillInfoItem(
        info
      )} <img src="${vertical_line}" alt="vertical line">`;
    }
  })
  .join("");

function fillInfoItem(info) {
  if (info?.header && info?.text) {
    return `
        <div class="d-flex" id="${info.id}">
            <img src="${info.img}" alt="${info.alt}" class="intro__footer-logo">
            <a href="${info.link}" data-rel="external" class="intro__footer-textBlock">
                <h4>${info.header}</h4>
                <p class="intro__footer-text">${info.text}</p>
            </a>
        </div>`;
  } else return "";
}
// #endregion

// #region serviceInfo
const arr_serviceInfo = [
  {
    img: "./assets/img/pexels-shvets-production-card-1.png",
    header: "SIMULATION"
  },
  { img: "./assets/img/pexels-mikhail-nilov-card-2.png", header: "EDUCATION" },
  {
    img: "./assets/img/pexels-rodnae-productions-card-3.png",
    header: "SELF-CARE"
  },
  { img: "./assets/img/pexels-mali-maeder-card-4.png", header: "OUTDOOR" }
];
const id_serviceInfo = document.querySelector("#serviceInfo_small");
if (id_serviceInfo.childElementCount == 0) {
  id_serviceInfo.innerHTML = carouselTemplate(
    "change_serviceInfo",
    tmpl_serviceInfo,
    arr_serviceInfo
  );
}
function change_serviceInfo(e, isNext) {
  changeItem(e, isNext, tmpl_serviceInfo, arr_serviceInfo);
}
function tmpl_serviceInfo(elem) {
  return `
        <div class="services__card">
                <div class="services__card-img">
                    <img src="${elem.img}" alt="services card" class="services__card-logoImg">
                    <div class="services__card-imgShadow"></div>
                </div>
                <h4 class="services__card-header">${elem.header}</h4>
                <img src="${horizontal_line}" alt="horizontal line" class="services__card-delimiter">
    
                <div class="services__card-desc">
                    <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                    </p>                     
                </div>
                <div class="services__card-btn">
                    <a href="#join" class="header__link">
                        <button class="wrapper_btn">
                            TRY IT NOW
                        </button>
                    </a>   
                </div>          
            </div> 
        `;
}
// #endregion

// #region techInfo
const arr_techInfo = [
  { img: "./assets/img/Hydra-Tech1.png", alt: "Unreal logo" },
  { img: "./assets/img/Hydra-Tech2.png", alt: "Unity logo" },
  { img: "./assets/img/Hydra-Tech3.png", alt: "Oculus logo" },
  { img: "./assets/img/Hydra-Tech4.png", alt: "Vive logo" }
];
const id_techInfo = document.querySelector("#techInfo_small");
if (id_techInfo.childElementCount == 0) {
  id_techInfo.innerHTML = carouselTemplate(
    "change_techInfo",
    tmpl_techInfo,
    arr_techInfo
  );
}
function change_techInfo(e, isNext) {
  changeItem(e, isNext, tmpl_techInfo, arr_techInfo);
}
function tmpl_techInfo(elem) {
  return `<img src="${elem.img}" alt="${elem.alt}" class="tech_tech_images-item" style="height: 200px;">`;
}
// #endregion

// #region processInfo
const arr_processInfo = [
  { text: "01", header: "3D Conception & Design" },
  { text: "02", header: "Interaction Design" },
  { text: "03", header: "VR World User Testing" },
  { text: "04", header: "Hydra VR Deploy" }
];
const id_processInfo = document.querySelector("#processInfo_small");
if (id_processInfo.childElementCount == 0) {
  id_processInfo.innerHTML = carouselTemplate(
    "change_processInfo",
    tmpl_processInfo,
    arr_processInfo
  );
}
function change_processInfo(e, isNext) {
  changeItem(e, isNext, tmpl_processInfo, arr_processInfo);
}
function tmpl_processInfo(elem) {
  return `
    <div class="process__card d-flex align-items-center flex-column">
        <div class="process__card-img">
            <span class="process__card-ImgNr">${elem.text}</span>
            <div class="process__card-iconBg"></div>
            <div class="process__card-iconShadow"></div>
        </div>
        <div class="process__card-headerBox d-flex align-items-end">
            <h4 class="process__card-header">
                ${elem.header}
            </h4>
        </div>   
    </div>
    `;
}
// #endregion

// #region carousel
function nextIndexCalculation(arr, actualIndex, isNext) {
  let nextIndex = 0;
  if (isNext) nextIndex = actualIndex + 1 < arr.length ? actualIndex + 1 : 0;
  else nextIndex = actualIndex - 1 >= 0 ? actualIndex - 1 : arr.length - 1;
  return nextIndex;
}

function fillItem(index, actualElement, templateFn, arr) {
  const html = `<div class="carousel__item" index="${index}">${templateFn(
    arr[index]
  )}</div>`;
  actualElement.outerHTML = html;
}
function chevronTemplate(onclickFn, isRight) {
  return `
    <div class="chevron chevron-${
      isRight ? "right" : "left"
    }"  onclick="${onclickFn}(this,${isRight})">
      <img src="${chevron_small_down}" alt="" class="chevron-icon">
      <div class="chevron-bgc"></div>
      <div class="chevron-shadow"></div>
    </div>
    `;
}
function carouselTemplate(fnChange, templateFn, arr, index = 0) {
  return `
    <div class="carousel__box">
        ${chevronTemplate(fnChange, false)}
        <div class="carousel__item" index="${index}">${templateFn(
    arr[index]
  )}</div>
        ${chevronTemplate(fnChange, true)}
    </div>
    `;
}
function changeItem(e, isNext, templateFn, arr) {
  const actualElement = e.parentElement.querySelector(".carousel__item");
  const actualIndex = actualElement.getAttribute("index") * 1;
  const nextIndex = nextIndexCalculation(arr, actualIndex, isNext);
  fillItem(nextIndex, actualElement, templateFn, arr);
}
// #endregion

// #region form validation
function isEmailOk(email) {
  let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(email);
}
document
  .querySelector("#join_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const requiredValues = ["email", "firstName", "lastName", "phone"];
    let status = true;
    for (let item of document
      .querySelector("#join_form")
      .querySelectorAll("input, textarea")) {
      if (item?.id === "email") {
        if (isEmailOk(item?.value)) clearInputError(item.id);
        else {
          status = false;
          addInputError(item.id, item?.placeholder);
        }
      } else if (requiredValues.includes(item?.id)) {
        if (item.value.length) clearInputError(item.id);
        else {
          status = false;
          addInputError(item.id, item?.placeholder);
        }
      }
    }
    if (status) {
      event.target.submit();
    }
  });

function clearInputError(id) {
  let parent = document.getElementById(id).parentElement;
  if (parent.querySelector(".join__form-error") !== null) {
    parent.querySelector(".join__form-error").remove();
  }
}
function addInputError(id, placeholder) {
  let parent = document.getElementById(id).parentElement;
  parent.innerHTML += `<small class="join__form-error ">${placeholder} is required</small>`;
}
// #endregion
