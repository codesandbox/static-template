let images = ["1", "2", "3"];
let i;
function imageChanger() {
  for (i = 0; i < images.length(); i++) {
    document.getElementById("images[i]").style.opacity = "10%";
    document.getElementById("images[i]").style.opacity = "25%";
    document.getElementById("images[i]").style.opacity = "45%";
    document.getElementById("images[i]").style.opacity = "70%";
    document.getElementById("images[i]").style.opacity = "100%";
    document.getElementById("images[i]").style.opacity = "70%";
    document.getElementById("images[i]").style.opacity = "45%";
    document.getElementById("images[i]").style.opacity = "25%";
    document.getElementById("images[i]").style.opacity = "10%";
    document.getElementById("images[i]").style.opacity = "0%";
  }
}
console.log(imageChanger);
