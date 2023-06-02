let usuario, mail, ip, usuarioTramposo, mailTramposo, ipTramposo;

usuario = prompt("Ingrese su usuario:");
mail = prompt("Ingrese su mail:");
ip = prompt("Ingrese su ip:");

usuarioTramposo =
  usuario == "pepito1307" ||
  usuario == "ggisi24" ||
  usuario == "soyMuyBueno22022";

mailTramposo =
  mail == "pedrogamer2004@gmail.com" ||
  mail == "whiterabbit01@gmail.com" ||
  mail == "soydemasiadobueno07@outlook.com";

ipTramposo = ip == "192.168.1.0" || ip == "192.168.1.2";

alert(
  "El usuario es tramposo: " + usuarioTramposo || mailTramposo || ipTramposo
);
// Otra forma mas corta

// let usuario = prompt("Ingrese su usuario:");
// let mail = prompt("Ingrese su mail:");
// let ip = prompt("Ingrese su ip:");

// let usuariosTramposos = ["pepito1307", "ggisi24", "soyMuyBueno22022"];
// let emailsTramposos = ["pedrogamer2004@gmail.com", "whiterabbit01@gmail.com", "soydemasiadobueno07@outlook.com"];
// let ipsTramposas = ["192.168.1.0", "192.168.1.2"];

// let esTramposo = usuariosTramposos.includes(usuario) || emailsTramposos.includes(mail) || ipsTramposas.includes(ip);

// alert("El usuario es tramposo: " + esTramposo);

// He inicializado las variables usuario, mail e ip usando la palabra clave let.
// He creado tres arrays (usuariosTramposos, emailsTramposos e ipsTramposas) que contienen los valores conocidos de usuarios, correos e ips tramposas, respectivamente.
// He utilizado el método includes() de los arrays para verificar si los valores ingresados por el usuario están en las listas de usuarios, correos e ips tramposas.
// He utilizado la variable esTramposo para almacenar el resultado de la comprobación lógica y mostrarlo en el mensaje de alerta.
