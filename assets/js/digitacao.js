// Efeito digitação

const c = (el) => {
  return document.querySelector(el);
};

function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textArray.forEach((letra, index) => {
    setTimeout(() => (elemento.innerHTML += letra), 90 * index);
  });
}
const titulo = c(".text-primary", ".text1");
typeWriter(titulo);
