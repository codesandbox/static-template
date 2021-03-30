function addFilme() {
  var listaFilmes = document.querySelector("#listaFilmes");
  var adicionarFilme = document.querySelector("#filme").value;
  var tagIMG = "<img src=" + adicionarFilme + ">";
  
  //listaFilmes.insertAdjacentHTML("beforeend", tagIMG);
  
  if(adicionarFilme.endsWith('.jpg')){
    listaFilmes.insertAdjacentHTML("beforeend", tagIMG)
  }else{
    alert("Não é um arquivo de imagem.")
  }
   adicionarFilme = document.querySelector("#filme").value=""
}



function addTrailer(adicionarFilme){
  var listaTrailer = document.querySelector("#lislistaTrailer")
  var adicionarFilme = document.querySelector("#filme").value;
  let video = adicionarFilme.replace("watch?v=", "embed/")
  var tagURL = "<iframe width=\"500px\" height=\"300px\" src=" + video + "></iframe>"
  
  listaFilmes.insertAdjacentHTML("beforeend", tagURL);
}




//aprender o conceito de indexOf