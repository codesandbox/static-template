const modal = document.querySelector(".modal");
const mobileButtonsMenu = document.querySelector(".mobile-buttons__menu");

mobileButtonsMenu.addEventListener("click", event => {
  event.preventDefault();
  modal.innerHTML = "";
  modal.classList.toggle("active");

  if (!modal.classList.contains("active")) {
    modal.style.display = "flex";
    const modalBlock = document.createElement("div");
    mobileButtonsMenu.classList.add("active");
    modalBlock.classList.add("modal-block");
    modalBlock.innerHTML = `<input
    type="text"
    class="header__input search-input"
    placeholder="Поиск по фильмам..."
  />
  <nav class="header__navigation navigation">
    <a href="#" class="navigation__link">Фильмы</a>
    <a href="#" class="navigation__link">ТВ</a>
    <a href="#" class="navigation__link">Новости</a>
    <a href="#" class="navigation__link">О сервисе</a>
  </nav>
  <div class="header__buttons button-group">
        <button class="button-group__button button-sign-up">
          Регистрация
        </button>
        <button class="button-group__button button-login-in">Войти</button>
      </div>`;
    modal.append(modalBlock);
  } else {
    modal.style.display = "none";
    mobileButtonsMenu.classList.remove("active");
  }
});

// SWIPER

$(document).ready(function() {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 2,
        width: 700
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".btn-next"
        }
      }
    }
  });
});

// TABS

const tabs = document.querySelectorAll(".tabs-titles__title");
const actorsTab = document.querySelector(".tabs-actors");
const creatersTab = document.querySelector(".tabs-creaters");
const actorsContent = document.querySelector("#actors");
const creatorsContent = document.querySelector("#creators");

tabs.forEach(item => {
  item.addEventListener("click", event => {
    let target = event.target;

    if (!item.classList.contains("active") && target.closest(".tabs-actors")) {
      item.classList.add("active");
      creatersTab.classList.remove("active");
      actorsContent.classList.add("visible");
      creatorsContent.classList.remove("visible");
    } else if (
      !item.classList.contains("active") &&
      target.closest(".tabs-creaters")
    ) {
      item.classList.add("active");
      actorsTab.classList.remove("active");
      creatorsContent.classList.add("visible");
      actorsContent.classList.remove("visible");
    }
  });
});
