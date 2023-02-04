var boolean = false;
window.onload = () => {
  Notification.requestPermission().then((r) => {
    if (r === "granted") {
      boolean = true;
    }
  });
};
function notificaciones() {
  if (boolean) {
    Notification("la aventura aguarda", {
      body: "seras capazde superar tu maximo puntaje?",
      icon: "./icono.jpg"
    });
  }
}
let interval = setInterval(notificaciones, 86400000);
