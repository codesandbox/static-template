const checkStatus = function (response) {
  return response.json();
}; // parse response with json

fetch("https://www.postman.com/collections/df971fc1c71c76ba2aa1", {
  method: "GET"
})
  .then(checkStatus)

  .then(function (data) {
    let urlGame = data.requests[0].url;
    return fetch(urlGame);
  }) // fetch games from second url

  .then(checkStatus)

  .then(function (data) {
    let list = document.getElementById("list");
    let fragment = document.createDocumentFragment();

    for (let item of data) {
      let node = document.createElement("li");
      node.innerHTML = `<p> <b>Name: </b> ${item.title} <img src = '${item.imageUrl}' 
        style = 'margin-left: 50px; with:100px; height:100px'>
        </p> <p> <b>Description: </b>${item.description}`;
      fragment.appendChild(node);
    }
    list.appendChild(fragment);
    list.removeChild(list.childNodes[list.childNodes.length - 1]);
  });
