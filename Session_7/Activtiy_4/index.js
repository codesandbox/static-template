const colorParent = document.getElementById("colors");
colorParent.addEventListener("click", (e) => {
  const selectedDiv = document.getElementById("selected");

  selectedDiv.style.backgroundColor = e.target.id;
  selectedDiv.textContent = `Selected Color: ${e.target.id}`;
});
