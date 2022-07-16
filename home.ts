let botonaso=document.getElementById("cambio");

botonaso?.addEventListener("click" , () =>{
  let pipipi=Array.from(document.getElementsByClassName("visible"));
  let popopo=Array.from(document.getElementsByClassName("cartelEntrada"));

  if (document.getElementById("menu").classList.contains("visible")){
    document.getElementById("menu").classList.remove("visible");
    document.getElementById("menu").classList.add("ordenado");
  }

  for (let index:number=1;index<pipipi.length;index++){
    pipipi[index].classList.remove("visible");
  }

  for (let index:number=0;index<popopo.length;index++){
    popopo[index].style.display= "none";
  }

})

let rompeBody=document.getElementsById("nover");

rompeBody.addEventListener("click" , () =>{
  document.getElementById("nover").classList.add("rompeTODO")
});

//buscar como modificar varios atributos css a la vez. Para poder lograr todo el acomodo de la pagina.

// investigar "elem.setAttribute(name, value)""

// https://extendsclass.com/typescript-to-javascript.html

