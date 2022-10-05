// DOM
let homeBtn, serviceBtn, home, services, request;

homeBtn = document.getElementById("hm");
serviceBtn = document.getElementById("svce");
home = document.getElementById("home");
services = document.getElementById("services");
request = document.getElementById("request");

const goToHome = () => {
  home.style.display = "block";
  services.style.display = "none";
};

const goToService = () => {
  services.style.display = "block";
  home.style.display = "none";
};

serviceBtn.onclick = goToService();
homeBtn.onclick = goToHome();
