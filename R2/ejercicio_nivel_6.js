// En un conocido videojuego online hay un usuario que es muy conocido por ser tramposo. Los desarrolladores del videojuego tienen algunos datos del usuario deshonesto y te solicitan que les crees un pequeño programita que les alerte a ellos cuando el tramposo quiere conectarse al juego para que lo puedan bloquear, sólo si se da el caso de que coincida la información. Usar prompt para pedir la información al usuario. Los datos del tramposo son:
// Usuarios conocidos: pepito1307 - ggisi24 - soyMuyBueno22022
// Direcciones IP: 192.168.1.0 - 192.168.1.2
// Emails: pedrogamer2004@gmail.com - whiterabbit01@gmail.com - soydemasiadobueno07@outlook.com

let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
let dirIp = prompt("Ingrese su direccion IP: ");
let casillaMail = prompt("Ingrese su casilla de mail: ");
let resultado =
  (nombreUsuario == "pepito1307" ||
    nombreUsuario == "ggisi24" ||
    nombreUsuario == "soyMuyBueno22022") &&
  (dirIp == "192.168.1.0" || dirIp == "192.168.1.2") &&
  (casillaMail == "pedrogamer2004@gmail.com" ||
    casillaMail == "whiterabbit01@gmail.com" ||
    casillaMail == "soydemasiadobueno07@outlook.com");
alert(resultado);
