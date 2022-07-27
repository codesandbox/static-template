var botonaso = document.getElementById("cambio");
var botonaso = document.getElementById("cambio");
botonaso === null || botonaso === void 0 ? void 0 : botonaso.addEventListener("click", function () {
    var pipipi = Array.from(document.getElementsByClassName("visible"));
    var popopo = Array.from(document.getElementsByClassName("cartelEntrada"));
    if (document.getElementById("menu").classList.contains("visible")) {
        document.getElementById("menu").classList.remove("visible");
        document.getElementById("menu").classList.add("ordenado");
    }
    for (var index = 1; index < pipipi.length; index++) {
        pipipi[index].classList.remove("visible");
    }
    for (var index = 0; index < popopo.length; index++) {
        popopo[index].style.display = "none";
    }
});

var rompeBody = document.getElementsById("nover");
rompeBody.addEventListener("click", function () {
    document.getElementById("nover").classList.add("rompeTODO");
});
