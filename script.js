var dia = "dia";
if (dia == "dia") {
  console.log("claro");
} else {
  console.log("de noite");
}

for (let contador2 = 0; contador2 <= 20; contador2 += 2) {
  console.log(contador2);
}
let tempo = "ensolarado";

function verificarTempo() {
  if (tempo == "chuvoso") {
    alert("O dia está chuvoso pegue um guarda-chuva!");
  } else {
    alert("O dia não está chuvoso pode sair!");
  }
}

verificarTempo();

function sobreEu(Mim) {
  console.log("Eu sou" + Mim);
}
sobreEu(" o Erick Moreira de Souza");

function sobreOErick(sobre) {
  console.log("sobre Mim," + sobre);
}
sobreOErick(" Meu nome é Erick Moreira de Souza");
sobreOErick(" Tenho 19 anos de idade");
sobreOErick(" Gosto muito de Pop");

function filmeEMusica(umFilmeEUmaMusica) {
  console.log("Gosto " + umFilmeEUmaMusica);
}
filmeEMusica("do filme Vingadores Ultimato");
filmeEMusica("da musica The end da banda Link Park");

function calculo(primeiroValor, segundoValor) {
  console.log(`O triplo do número 10 é ${primeiroValor * segundoValor}`);
}
calculo(10, 3);

let temLuz = true;

if (temLuz == true) {
  console.log("Tem luz");
} else {
  console.log("Não tem luz");
}
let listadecomidas = ["Macarrão", "Coxinha", "Bolo", "Batata Frita", "Pizza"];
console.log(listadecomidas);

listadecomidas.unshift("Pastel");

listadecomidas.pop();

listadecomidas.splice(3, 4, "Lasanha", "Macarronese");

listadecomidas.shift();
let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numeros.sort());

let coisasQueOErickGosta = {
  desenhoQueGosta: "Ben 10",
  marcaDeCarroQueGosta: "Lamborguini",
  gameQueJoga: "League Of Legends"
};
console.log(coisasQueOErickGosta);

coisasQueOErickGosta.dinossauroQueGosta = "T-Rex";

delete coisasQueOErickGosta.gameQueJoga;

let cadastro = [
  {
    nome: "Erick Moreira de Souza",
    idade: "19",
    telefone: "021965773013",
    amigos: ["daniel", "João", "Gabriel", "Luiz"]
  },
  {
    nome: "Erick Moreira de Souza",
    idade: "19",
    telefone: "021965773013",
    amigos: ["daniel", "João", "Gabriel", "Luiz"]
  },
  {
    nome: "Erick Moreira de Souza",
    idade: "19",
    telefone: "021965773013",
    amigos: ["daniel", "João", "Gabriel", "Luiz"]
  },
  {
    nome: "Erick Moreira de Souza",
    idade: "19",
    telefone: "021965773013",
    amigos: ["daniel", "João", "Gabriel", "Luiz"]
  }
];
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
