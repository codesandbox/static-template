async function getGithubUsernames() {
  let data = await (await fetch("https://api.github.com/users")).json();
  data.forEach((element) => displayValuesAsList(element.login));
}

function displayValuesAsList(values) {
  let parentElem = document.getElementById("sorted-list");
  let liElem = document.createElement("li");
  liElem.innerHTML = `<div class="liDiv">${values}</div>`;
  parentElem.append(liElem);
}
