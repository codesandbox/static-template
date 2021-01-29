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
