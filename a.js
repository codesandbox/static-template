const cubo = document.getElementById("cubo");
let posizioneLeft = 5;
let posizioneTop = 60;

function muoviL() {
  console.log("cubo = ", cubo);

  posizioneLeft = posizioneLeft - 10;
  cubo.style.marginLeft = posizioneLeft + "px";
  cubo.style.background = "blue";

  console.log("posizioneLeft ", posizioneLeft);
  console.log("marginLeft ", cubo.style.marginLeft);
}

function muoviR() {
  console.log("cubo = ", cubo);

  posizioneLeft = posizioneLeft + 10;
  cubo.style.marginLeft = posizioneLeft + "px";
  cubo.style.background = "blue";

  console.log("posizioneLeft ", posizioneLeft);
  console.log("marginLeft ", cubo.style.marginLeft);
}

function muoviU() {
  console.log("cubo = ", cubo);

  posizioneTop = posizioneTop - 10;
  cubo.style.marginTop = posizioneTop + "px";
  cubo.style.background = "blue";

  console.log("posizioneTop ", posizioneTop);
  console.log("marginTop ", cubo.style.marginTop);
}

function muoviB() {
  console.log("cubo = ", cubo);

  posizioneTop = posizioneTop + 10;
  cubo.style.marginTop = posizioneTop + "px";
  cubo.style.background = "blue";

  console.log("posizioneTop ", posizioneTop);
  console.log("marginTop ", cubo.style.marginTop);
}

function reset() {
  console.log("cubo = ", cubo);

  posizioneLeft = 5;
  posizioneTop = 60;
  cubo.style.marginLeft = posizioneLeft;
  cubo.style.marginTop = posizioneTop;
  cubo.style.background = "green";

  console.log("posizioneLeft ", posizioneLeft);
  console.log("marginLeft ", cubo.style.marginLeft);
  console.log("posizioneTop ", posizioneTop);
  console.log("marginTop ", cubo.style.marginTop);
}
