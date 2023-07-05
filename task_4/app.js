let toggle_btn;
let main_wraper;
let hamburger;

function declare() {
    toggle_btn =  document.querySelector(".toggle-btn");
    main_wraper = document.querySelector(".main-wraper");
    hamburger = document.querySelector(".hamburger");
}

const main =  document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
    dark = !dark;
    let clone = main_wraper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        main_wraper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}

function events() {
toggle_btn.addEventListener("click", toggleAnimation);
hamburger.addEventListener("click", () => {
    main_wraper.classList.toggle("active");
})
}

events();