// // //#1 element.innerHTML

// // const judul = document.getElementById("judul");
// // judul.innerHTML = "Pando Edo Fernando";
// // judul.style.color = "red";

// // const sectionA = document.querySelector("section#a");
// // sectionA.innerHTML = "<div><p>Paragraf1</p></div>";

// // 2#element.style.<propertiesCSS>
// // const judul = document.querySelector("#judul");
// // judul.style.color = "lightblue";
// // judul.style.backgroundColor = "salmon";
// // judul.style.textAlign = "center";

// // #element.getAttribute
// // const judul = document.getElementsByTagName("h1")[0];
// // judul.setAttribute("name", "pando");

// // const a = document.querySelector("section#a a");
// // // a.setAttribute("id", "link");
// // a.getAttribute("href");

// // const p2 = document.querySelector(".p2");

// // p2.setAttribute("class", "label");

// // element.classList
// // const p2 = document.querySelector(".p2");
// // p2.classList.add("label");

// // document.body.style.backgroundColor;

// // #Manipulasi Node

// const pBaru = document.createElement("p");
// const teksBaru = document.createTextNode("Paragraph Baru");

// pBaru.appendChild(teksBaru);

// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);

// // const pLima = document.createElement("p");
// // const teksLima = document.createTextNode("Paragraf 5");
// // pLima.appendChild(teksLima);

// // const sectionB = document.getElementById("b");
// // sectionB.appendChild(pLima);

// // --------------------------------------------------
// const liBaru = document.createElement("li");
// const liTeks = document.createTextNode("Item Baru");

// liBaru.appendChild(liTeks);

// const ul = document.querySelector("section#b ul");
// const li2 = document.querySelector("li:nth-child(1)");

// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName("a")[0];

// sectionA.removeChild(link);

// // =============================
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");

// const h2Baru = document.createElement("h2");
// const th2Baru = document.createTextNode("Paragraf diganti");

// h2Baru.appendChild(th2Baru);

// sectionB.replaceChild(h2Baru, p4);

// DOM Events
// // EventHandler

// const p3 = document.querySelector(".p3");

// function ubahWarnaP2() {
//   p2.style.backgroundColor = "salmon";
// }

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "orange";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

// ===========================================
// const p4 = document.querySelector("section#b p");

// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");

//   const liBaru = document.createElement("li");
//   const liTeks = document.createTextNode("Item Baru");

//   liBaru.appendChild(liTeks);
//   ul.appendChild(liBaru);
// });

// Event Handler
const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "navy";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "navy";
});
p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "salmon";
});
