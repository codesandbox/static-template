let menuVisible=false;
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function enviarFormulario() {
    document.forms[0].submit();
    alert("Mensaje enviado con éxito");
    document.forms[0].reset();
}

