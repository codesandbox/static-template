const colors = document.getElementById("colors");

colors.addEventListener("click", (event) => {
  console.log(event);
  const color = event.target.id;

  const selectedContainer = document.getElementById("selected");

  selectedContainer.style.background = color;
  selectedContainer.textContent = `Selected Color: ${color}`;

  console.dir(color);
});
