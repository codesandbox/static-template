const elementoLista = document.querySelector("ul");
const elementoInput = document.querySelector("input");
const elementoBotao = document.querySelector("button");

const tarefas = [
  // array
];

// função para poder fazer o li dinamico

function mostrarTarefas() {
  elementoLista.innerHTML = "";

  for (tarefa of tarefas) {
    const elementoTarefa = document.createElement("li");
    const elementoTexto = document.createTextNode(tarefa);

    const elementoLink = document.createElement("a");
    const pos = tarefas.indexOf(tarefa);

    const linkText = document.createTextNode("x");
    elementoLink.appendChild(linkText);
    elementoLink.setAttribute("onclick", `deletarTarefa(${pos})`);
    elementoLink.setAttribute("href", "#");

    elementoTarefa.appendChild(elementoTexto);
    elementoLista.appendChild(elementoTarefa);
    elementoTarefa.appendChild(elementoLink);
  }
}

mostrarTarefas();

function addTarefa() {
  const textoDaTarefa = elementoInput.value;
  tarefas.push(textoDaTarefa);
  elementoInput.value = "";

  mostrarTarefas();
}

elementoBotao.setAttribute("onclick", "addTarefa()");

function deletarTarefa(pos) {
  tarefas.splice(pos, 1);
  mostrarTarefas();
}
