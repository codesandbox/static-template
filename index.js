let container = document.getElementById("play");

let keypressCodes = {
    "KeyA" : "1",
    "KeyS" : "2",
    "KeyD" : "3",
    "KeyF" : "4",
    "KeyG" : "5",
    "KeyH" : "6",
    "KeyJ" : "7",
    "KeyK" : "8",
    "KeyL" : "9",
}

let removeTransition = (event) => {
    //console.log(event);
    if(event.propertyName !== "transform"){
        return;
    }else{
        event.target.classList.remove("playing");
    }
}

let playSoundOnCLick = (event) => {
    if (event.target.id === "play") {
        return;
    } else {
        let id;
        let parentId = event.target.parentNode.id;
        let currentId = event.target.id;
        if(parentId === "play"){
            id = currentId;
        }else{
            id = parentId;
        }
        //console.log(id);
        let soundId = id + ".0";
        let soundEl = document.getElementById(soundId);
        //console.log(soundEl);
        let classEl = document.getElementById(id);
        if (soundEl) {
            soundEl.currentTime = 0;
        }
        let classList = classEl.classList;
        classList.add("playing");
        soundEl.play();
    }
}

let playOnKeypress = (e) => {
    let id = keypressCodes[e.code];
    if(id === undefined){
        return;
    }else{
        //console.log(e.code);
        let sound = document.getElementById(id + ".0");
        let classId = document.getElementById(id);
        if (sound) {
            sound.currentTime = 0;
        }
        let classList = classId.classList;
        classList.add("playing");
        sound.play();
    }
}

container.addEventListener("click", playSoundOnCLick);
container.addEventListener("transitionend", removeTransition);
document.addEventListener("keypress", playOnKeypress);