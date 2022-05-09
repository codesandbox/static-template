function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);

  request.send();

  console.log(request.responseText);
  return request.responseText;
}
window.onload = function pegarDados() {
  console.log("Foi");
  console.log(fazGet("/user"));
};
