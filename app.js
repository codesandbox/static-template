function far_scroll() {
    if (window.scrollY > 800) return
    trigger_animation()
    trigger_animation_two()
    trigger_animation_three()
    trigger_animation_four()
    trigger_animation_five()
}

window.addEventListener("scroll", far_scroll)


function trigger_animation() {
    let element = document.getElementById("one")
    element.style.animation = "none"
    setTimeout(
        () => element.style.animation = "",
        0
    )
}

function trigger_animation_two() {
    let element = document.getElementById("two")
    element.style.animation = "none"
    setTimeout(
        () => element.style.animation = "",
        0
    )
}

function trigger_animation_three() {
    let element = document.getElementById("three")
    element.style.animation = "none"
    setTimeout(
        () => element.style.animation = "",
        0
    )
}

function trigger_animation_four() {
    let element = document.getElementById("four")
    element.style.animation = "none"
    setTimeout(
        () => element.style.animation = "",
        0
    )
}


function trigger_animation_five() {
    let element = document.getElementById("five")
    element.style.animation = "none"
    setTimeout(
        () => element.style.animation = "",
        0
    )
}

/*function modal() {
    var pop = document.getElementById('modal');
    pop.style.visibility = "visible";
    pop.style.display = "block"
    var bdy = document.getElementById('body');
}*/

const openButton = document.querySelector('.modal-open-btn');
const modal = document.getElementById('modal_cont');
const closeButton = document.querySelector('.close-btn');
const dropmenu = document.querySelector('.drop');


openButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

dropmenu.addEventListener('click', () => {
    dropmenu.id = 'drop_out';
});