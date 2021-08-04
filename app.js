const button = document.getElementById("button");

button.addEventListener("click", qualTipo);

function qualTipo() {
    let ladoA = document.getElementById("sideA").value;
    let ladoB = document.getElementById("sideB").value;
    let ladoC = document.getElementById("sideC").value;
    let resultado = document.getElementById("resultado");
    let tipoTriangulo = "";

    Number(ladoA);
    Number(ladoB);
    Number(ladoC);

    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = "Equilátero";
        resultado.innerHTML = `Triângulo: ${tipoTriangulo}`;
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        tipoTriangulo = "Escaleno";
        resultado.innerHTML = `Triângulo: ${tipoTriangulo}`;
    } else if (
        (ladoA === ladoB && ladoB !== ladoC) ||
        (ladoB === ladoC && ladoC !== ladoA) ||
        (ladoC === ladoA && ladoA !== ladoB)
    ) {
        tipoTriangulo = "Isóceles";
        resultado.innerHTML = `Triângulo: ${tipoTriangulo}`;
    }

    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
}
