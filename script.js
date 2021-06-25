function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  event.currentTarget.style.backgroundColor = "yellow";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);

  // event.dataTransfer.clearData();
}
