//console.log("bonjour");

let cible1 = document.getElementById("versfrancs");

cible1.addEventListener("click", conversionFrancs);

function conversionFrancs(event) {
  //recuperer la valeur de saisie
  let valEuro = document.getElementById("valeur").value;
  //conversion
  let valFranc = valEuro * 6.55;
  //resultat
  document.getElementById("resultat").value = valFranc;
}

let cible2 = document.getElementById("verseuros");

cible2.addEventListener("click", conversionEuros);

function conversionEuros(event) {
  //recuperer la valeur de saisie
  let valFranc = document.getElementById("valeur").value;
  //conversion
  let valEuro = valFranc / 6.55;
  //resultat
  document.getElementById("resultat").value = valEuro;
}

//gérer la saisie d'un mdp

//cible: la zone de saisie
let cibleMdp = document.getElementById("passwd");
//event: la saisie d'un caractère -> input
cibleMdp.addEventListener("input", verifMdp);
//action: vérifier la longueur du mdp
function verifMdp(event) {
  //recuperer la taille de la valeur de saisie
  let mdp = document.getElementById("passwd").value.length;
  if (mdp < 4) {
    document.getElementById("msgPasswd").textContent = "longueur faible";
    document.getElementById("msgPasswd").style.color = "red";
  }
  if (mdp > 4 && mdp < 9) {
    document.getElementById("msgPasswd").textContent = "longueur moyenne";
    document.getElementById("msgPasswd").style.color = "orange";
  }
  if (mdp > 9) {
    document.getElementById("msgPasswd").textContent = "longueur bonne";
    document.getElementById("msgPasswd").style.color = "green";
  }
}
