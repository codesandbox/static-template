var palabras = [
  "HTML",
  "BODY",
  "STYLE",
  "DIV",
  "ALIGN",
  "ETIQUETA",
  "IMG",
  "BR",
  "HEAD",
  "WEB",
  "WWW",
  "SCRIPT",
  "INTERPRETE",
  "PROGRAMACION",
  "CSS",
  "XML",
  "USUARIO",
  "INTERNET",
  "LINK",
  "SERVIDOR"
];

function generaTabla() {
  // get the reference for the body
  var mybody = document.getElementById("mtabla");

  // creates <table> and <tbody> elements
  var mytable = document.createElement("table");
  var mytablebody = document.createElement("tbody");

  // creating all cells
  for (let j = 0; j < 30; j++) {
    // creates a <tr> element
    var mycurrent_row = document.createElement("tr");

    for (let i = 0; i < 30; i++) {
      // creates a <td> element
      var icorrecta = i;
      var jcorrecta = j;
      var mycurrent_cell = document.createElement("td");
      if (i / 10 < 1) {
        icorrecta = 0;
        icorrecta = icorrecta.toString() + i.toString();
      }
      if (j / 10 < 1) {
        jcorrecta = 0;
        jcorrecta = jcorrecta.toString() + j.toString();
      }
      let valor = jcorrecta.toString() + icorrecta.toString();
      mycurrent_cell.setAttribute("id", valor);
      //console.log("Este es el id: " + valor);

      var campovacio = campoVacio();

      // creates a Text Node

      var currenttext = document.createTextNode(campovacio);
      //mycurrent_cell.innerHTML= " ";

      // appends the Text Node we created into the cell <td>
      mycurrent_cell.appendChild(currenttext);

      // appends the cell <td> into the row <tr>
      mycurrent_row.appendChild(mycurrent_cell);
    }

    // appends the row <tr> into <tbody>
    mytablebody.appendChild(mycurrent_row);
  }

  // appends <tbody> into <table>
  mytable.appendChild(mytablebody);
  // appends <table> into <body>
  mybody.appendChild(mytable);
  // sets the border attribute of mytable to 2;
  mytable.setAttribute("border", "2");
  console.log("llega a llenar tabla");

  llenarTabla();
}
//campo vacio
function campoVacio() {
  return ".";
}

//Generador de letra random
function letraRandom() {
  var abecedario = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ";
  var letraRandom1 = "";
  for (let index = 0; index < 1; index++) {
    letraRandom1 = abecedario.charAt(
      Math.floor(Math.random() * abecedario.length)
    );
  }

  return letraRandom1;
}

function posicionInicial() {
  var numero1 = Math.floor(Math.random() * 3);
  var numero2 = Math.floor(Math.random() * 10);
  var numeroizquierdo = numero1.toString() + numero2.toString();
  numero1 = Math.floor(Math.random() * 3);
  numero2 = Math.floor(Math.random() * 10);

  console.log("El numero izquierdo es: " + numeroizquierdo);
  var numeroderecho = numero1.toString() + numero2.toString();
  console.log("El numero derecho es: " + numeroderecho);

  return numeroizquierdo.toString() + numeroderecho.toString();
}

function horizontalVertical() {
  var position = Math.floor(Math.random() * 2);
  return position;
}
/*
function cabe(posicioninicial, palabra, position) {
let cabee = true;
let solodigito = false;
let idderecho = posicioninicial.substr(2, 3);
let idizquierdo = posicioninicial.substr(0, 2);
console.log(
"entra con: " +
  palabra +
  " pisción inicial: " +
  posicioninicial +
  " positión: " +
  position +
  " idderecho: " +
  idderecho +
  " idisquierdo: " +
  idizquierdo
);
if (
parseInt(30, 10) - parseInt(idizquierdo, 10) <= palabra.length ||
parseInt(30, 10) - parseInt(idderecho, 10) <= palabra.length
) {
console.log("cabee = false 1");
cabee = false;
} else {
//horizonal
if (position == 0) {
  if (posicioninicial[2] == "0") {
    idderecho = posicioninicial[3];
    solodigito = true;
  } else {
    idderecho = posicioninicial.substr(2, 3);
  }
  for (
    let index = parseInt(idderecho, 10);
    index < parseInt(idderecho, 10) + palabra.length;
    index++
  ) {
    if (solodigito == true) {
      if (
        document.getElementById(idizquierdo + +"0" + idderecho.toString())
          .textContent !== "."
      ) {
        cabee = true;
      } else {
        console.log("cabee = false 2");
        cabee = false;
        break;
      }
    } else {
      if (
        document.getElementById(idizquierdo + idderecho.toString())
          .textContent != "."
      ) {
        cabee = true;
      } else {
        console.log("cabee = false 3");
        cabee = false;
        break;
      }
    }
  }

  //vertical
} else {
  if (posicioninicial[0] == "0") {
    idizquierdo = "0" + posicioninicial[3];
  } else {
    idizquierdo = posicioninicial.substr(0, 1);
  }
  for (
    let index = parseInt(idizquierdo, 10);
    index < parseInt(idizquierdo, 10) + palabra.length;
    index++
  ) {

    if (solodigito == true) {
      if (
        document.getElementById("0" + idizquierdo.toString() + idderecho)
          .textContent != "."
      ) {
        cabee = true;
      } else {
        cabee = false;
        console.log("cabee = false 4");
        
        break;
      }
    } else {
      if (
        document.getElementById(idizquierdo + idderecho.toString())
          .textContent != "."
      ) {
        cabee = true;
      } else {
          console.log("cabee = false 5");
        cabee = false;
        break;
      }
    }
  }
}
if (cabee == false) {
  console.log("se repite cabe");
  cabe(posicionInicial(), palabra, position);
} else {
  console.log(
    "entra a cabe: " + palabra + " posicion inicial: " + posicioninicial
  );
  insertarPalabraEnTabla(palabra, posicioninicial, position);
}
}
}

*/
function cabe(posicioninicial, palabra, position) {
  var cabee = true;
  var idderecho = posicioninicial.substr(2, 3);
  var idizquierdo = posicioninicial.substr(0, 2);

  if (document.getElementById(posicioninicial).textContent != ".") {
    cabee = false;
  }

  if (30 - idizquierdo < palabra.length || 30 - idderecho < palabra.length) {
    cabee = false;
  }
  {
    // horizontal(2)
    if (position == 0) {
      if (posicioninicial[2] == 0) {
        for (
          let index = parseInt(posicioninicial[3]);
          index < palabra.length + parseInt(posicioninicial[3]);
          index++
        ) {
          if (index / 10 >= 1) {
            if (
              document.getElementById(idizquierdo + index.toString())
                .textContent != "."
            ) {
              cabee = false;
            }
          } else {
            if (
              document.getElementById(idizquierdo + "0" + index.toString())
                .textContent != "."
            ) {
              cabee = false;
            }
          }
        }
      } else {
        for (
          let index = parseInt(idderecho);
          index < palabra.length + parseInt(idderecho);
          index++
        ) {
          if (
            document.getElementById(idizquierdo + index.toString())
              .textContent != "."
          ) {
            cabee = false;
          }
        }
      }

      //Vertical(0)
    } else {
      if (posicioninicial[0] == 0) {
        for (
          let index = parseInt(posicioninicial[1]);
          index < palabra.length + parseInt(posicioninicial[1]);
          index++
        ) {
          if (index / 10 >= 1) {
            if (
              document.getElementById(index.toString() + idderecho)
                .textContent != "."
            ) {
              cabee = false;
            }
          } else {
            if (
              document.getElementById("0" + index.toString() + idderecho)
                .textContent != "."
            ) {
              cabee = false;
            }
          }
        }
      } else {
        for (
          let index = parseInt(idizquierdo);
          index < palabra.length + parseInt(idizquierdo);
          index++
        ) {
          if (
            document.getElementById(index.toString() + idderecho).textContent !=
            "."
          ) {
            cabee = false;
          }
        }
      }
    }
  }

  if (cabee == true) {
    console.log(
      palabra +
        " si cabe en posición: " +
        posicioninicial +
        "en position: " +
        position
    );
    insertarPalabraEnTabla(palabra, posicioninicial, position);
  } else {
    console.log("se repite cabe");
    posicioninicial = posicionInicial();
    position = horizontalVertical();
    cabe(posicioninicial, palabra, position);
  }
}

function insertarPalabraEnTabla(palabra, posicioninicial, position) {
  var idderecho = posicioninicial.substr(2, 3);
  var idizquierdo = posicioninicial.substr(0, 2);

  console.log(
    "llega a insertar palabra la palabra: " +
      palabra +
      " en la posición: " +
      posicioninicial +
      " con position: " +
      position
  );

  var letra = 0;
  // horizontal(2)
  if (position == 0) {
    if (posicioninicial[2] == 0) {
      for (
        let index = parseInt(posicioninicial[3], 10);
        index < palabra.length + parseInt(posicioninicial[3], 10);
        index++
      ) {
        if (index / 10 >= 1) {
          document.getElementById(idizquierdo + index.toString()).innerHTML =
            palabra[letra];
          letra++;

          document.getElementById(idizquierdo + index.toString()).innerHTML =
            palabra[letra];
        } else {
          document.getElementById(
            idizquierdo + "0" + index.toString()
          ).innerHTML = palabra[letra];
          letra++;
        }
      }
    } else {
      for (
        let index = parseInt(idderecho, 10);
        index < palabra.length + parseInt(idderecho, 10);
        index++
      ) {
        document.getElementById(idizquierdo + index.toString()).innerHTML =
          palabra[letra];
        letra++;
      }
    }

    //Vertical(0)
  } else {
    if (posicioninicial[0] == 0) {
      for (
        let index = parseInt(posicioninicial[1], 10);
        index < palabra.length + parseInt(posicioninicial[1], 10);
        index++
      ) {
        if (index / 10 >= 1) {
          document.getElementById(index.toString() + idderecho).innerHTML =
            palabra[letra];
          letra++;
        } else {
          document.getElementById(
            "0" + index.toString() + idderecho
          ).innerHTML = palabra[letra];
          letra++;
        }
      }
    } else {
      for (
        let index = parseInt(idizquierdo, 10);
        index < palabra.length + parseInt(idizquierdo, 10);
        index++
      ) {
        document.getElementById(index.toString() + idderecho).innerHTML =
          palabra[letra];
        letra++;
      }
    }
  }
}
/*
function insertarPalabraEnTabla(palabra, posicioninicial, position) {
console.log(
  "entra palabra: " +
    palabra +
    ", posición inicial: " +
    posicioninicial +
    ", position: " +
    position
);
if (position == 0) {
  let posicionfija = posicioninicial[0] + posicioninicial[1];
  let posicionnofija = parseInt(posicioninicial[2] + posicioninicial[3], 10);

  console.log(
    "pos fija: " + posicionfija + " pos nofija:  " + posicionnofija
  );
  let index = 0;

  for (let y = posicionnofija; y < palabra.length + posicionnofija; y++) {
    let yy = y;
    if (posicionnofija / 10 < 1) {
      yy = "0" + y.toString();
    }
    document.getElementById(posicionfija + yy.toString()).innerHTML =
      palabra[index];
    index++;
  }
} else {
  // vertical

  let posicionfija = posicioninicial[0] + posicioninicial[1];
  let posicionnofija = parseInt(posicioninicial[2] + posicioninicial[3], 10);
  let index = 0;

  for (let y = posicionnofija; y < palabra.length + posicionnofija; y++) {
    let yy = y;
    if (posicionnofija / 10 < 1) {
      yy = "0" + y.toString();
    }

    document.getElementById(yy.toString() + posicionfija).innerHTML =
      palabra[index];
    index++;
  }
}
}
*/

function llenarTabla() {
  //buscamos la primera palabra
  for (let j = 0; j < palabras.length; j++) {
    let palabra = palabras[j];
    let posicioninicial = posicionInicial();

    let position = horizontalVertical();
    cabe(posicioninicial, palabra, position);
  }

  //llenarVacios();
}

function llenarVacios() {
  for (let j = 0; j < 30; j++) {
    for (let i = 0; i < 30; i++) {
      let icorrecta = i;
      let jcorrecta = j;

      if (i / 10 < 1) {
        icorrecta = 0;
        icorrecta = icorrecta.toString() + i.toString();
      }
      if (j / 10 < 1) {
        jcorrecta = 0;
        jcorrecta = jcorrecta.toString() + j.toString();
      }
      let valor = jcorrecta.toString() + icorrecta.toString();
      if (document.getElementById(valor).textContent == ".") {
        document.getElementById(valor).innerHTML = letraRandom();
      }
    }
  }
}
