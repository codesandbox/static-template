// YouTube clasifica a sus usuarios como usuarios espectadores o creadores. Donde los usuarios espectadores son aquellos que sólo utilizan
// la plataforma para ver videos, pero nunca han generado contenidos, es decir no han subido un video. Por el contrario, los usuarios creadores
// son los que al menos subieron un video a la plataforma. Cada vez que un usuario realiza una búsqueda, el algoritmo encargado de esta acción, debe
// priorizar los resultados dependiendo de la edad del usuario y su tipo (creador o espectador).
// Para esto necesita asignarle una categoría al usuario. Dichas categorías se especifican con números, de la siguiente manera:
// 1: usuario es menor a 12 años.
// 2: la edad está entre 12 y 17 y el usuario es creador.
// 3: la edad está entre 12 y 17 y el usuario es espectador.
// 4: la edad es mayor a 17 años y el usuario es creador.
// 5: la edad es mayor a 17 años y el usuario es espectador.
// Como el algoritmo actualmente esta sufriendo algunas fallas, están pidiendo a programadores de todo el mundo que cree un script que les permita
// poder categorizar los usuarios y avisarle la categoría que le corresponde.
// Te animás a resolverlo?

function categorizarUsuario(edadUsuario, subioVideo) {
  if (edadUsuario < 12) {
    return alert("La categoría del usuario es 1");
  } else if (12 <= edadUsuario <= 17) {
    if (subioVideo) {
      return alert("La categoría del usuario es 2");
    } else {
      return alert("La categoría del usuario es 3");
    }
  } else {
    if (subioVideo) {
      return alert("La categoría del usuario es 4");
    } else {
      return alert("La categoría del usuario es 5");
    }
  }
}

//solicitamos al usuario que ingrese su edad y si es creador
let edadUsuario = Number(prompt("Ingrese su edad: "));
//el confirm se usa para el resultado booleano - devuelve true o false
let subioVideo = confirm("¿Subió algun video?");

categorizarUsuario(edadUsuario, subioVideo);
