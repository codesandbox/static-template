let linhas = document.querySelectorAll(".linha");

for (let item of linhas) {
  item.addEventListener("click", MostrarDetalhes);
}

function MostrarDetalhes() {
  var id = this.name;
  const envio = { valor: id };
  var JSONenvio = JSON.stringify(envio);
  let url = "/user";
  fazPost(url, JSONenvio);
  console.log(this.name);
}

function fazPost(url, body) {
  console.log("body=", body);
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "aplication/json");
  request.send(body);

  request.onload = function () {
    console.log(this.responseText);
  };
  return request.responseText;
}
