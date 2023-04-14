document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
 
    {
      name: "1",
      img: "images/hello_kitty_1[1].jpg"
    },
    {
      name: "2",
      img: "images/hello_kitty_2[2].jpg"
    },
    {
      name:"3",
      img: "images/hello_kitty_3[3].jpg"
    },
    {
      name:"4",
      img: "images/hello_kitty_4[4].jpg"
    },
    {
      name:"5",
      img: "images/hello_kitty_5[5].jpg"
    },
    {
      name:"6",
      img: "images/hello_kitty_6[6].jpg"
  
    },
    {
      name: "1",
      img: "images/hello_kitty_1[1].jpg"
    },
    {
      name: "2",
      img: "images/hello_kitty_2[2].jpg"
    },
    {
      name:"3",
      img: "images/hello_kitty_3[3].jpg"
    },
    {
      name:"4",
      img: "images/hello_kitty_4[4].jpg"
    },
    {
      name:"5",
      img: "images/hello_kitty_5[5].jpg"
    },
    {
      name:"6",
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
  cartasEscogidas.push(cardAdj[cartasId].name);
  cartasEscogidasId.push(cardId);
  this.setAttribute("scr",cardAdj[cardId].img);
  if (cartasEscogidas.lenght === 2) {
    setTimeout(verificarpareja, 1000);
  }
}
