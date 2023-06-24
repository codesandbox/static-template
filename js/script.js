document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""
  ) {
    alert("Dados enviados com sucesso! Em breve entrarei em contato.");
  } else {
    alert("Não enviado! Todos os campos devem ser preenchidos!");
  }
}
