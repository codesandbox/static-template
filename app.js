document.addEventListener("DOMContentLoaded", =>{
  const cardAdj= [
  {
    name: "c",
    img: "images/hello_kitty_1[1].jpg"
    img: "images/hello_kitty_2[2].jpg"
    img: "images/hello_kitty_3[3].jpg"
    img: "images/hello_kitty_4[4].jpg"
    img: "images/hello_kitty_5[5].jpg"
    img: "images/hello_kitty_6[6].jpg"

  },
 
];

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartasganadas = [];



//----------------- lecture_03 -----------------//


function crearTablero(){

for (let i= 0; 1 < cardAdj.lenght; i++) {
  var carta= document.createElement ("img");

  carta.setAttribute("src", "images/reverso.png");

  carta.setAttribute("data-id", 1);

  carta.addEventListener("click", voltearCarta);

  cuadricula.appendChild (carta);
  }
}


//----------------- lecture_04 -----------------//



function voltearCarta(){
  var cartasId = this.getAttribute("data-id");
  cartasEscogidas.push(cardAdj[cartasId].name)
}
);