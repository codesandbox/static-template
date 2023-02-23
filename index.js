const ol = document.getElementById("apps");

const data = [
  {
    logo:
      "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png",
    name: "Netflix"
  },
  {
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg",
    name: "Amazon Prime"
  },
  {
    logo:
      "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
    name: "Hotstar"
  }
];

data.map((val) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const p = document.createElement("p");
  img.src = val.logo;
  // div Stylling
  div.style.display = "flex";
  div.style.alignItems = "center";

  //img stylling
  img.style.width = "30px";
  img.style.height = "30px";
  img.style.borderRadius = "4px";
  img.style.objectFit = "  fill";

  //styling p
  p.innerHTML = val.name;
  p.style.marginLeft = "10px";

  // li stylling
  li.style.fontSize = "35px";
  li.style.padding = "3px";
  li.style.height = "40px";

  // img+p----->div
  div.appendChild(img);
  div.appendChild(p);
  //div------>li
  li.appendChild(div);
  //li----------->ol
  ol.appendChild(li);
});
