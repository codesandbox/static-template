let inputText = document.getElementById("inputText");
let taskCardSelector = document.getElementById("taskCardSelector");
let radialMenu = document.getElementById("radialMenu");
let selectedTask = null;

// Créer une nouvelle carte (liste)
function createNewCard(cardName) {
  let newCard = document.createElement("section");
  newCard.classList.add("carte");
  newCard.id = cardName;
  newCard.appendChild(containerTasks);

  let containerTasks = document.createElement("div");
  containerTasks.classList.add("containerTasks");

  let h2 = document.createElement("h2");
  h2.textContent = cardName;
  titleContainerTasks.appendChild(h2);

  let titleContainerTasks = document.createElement("div");
  titleContainerTasks.classList.add("titleContainerTasks");
  containerTasks.appendChild(titleContainerTasks);

  let ul = document.createElement("ul");
  containerTasks.appendChild(ul);

  // Mettre à jour le sélecteur d'input avec la nouvelle carte
  let newOption = document.createElement("option");
  newOption.value = cardName;
  newOption.textContent = cardName;
  taskCardSelector.insertBefore(newOption, taskCardSelector.lastChild);

  return newCard;
}

// Ajouter une tâche
function addTask() {
  let selectedCardValue = taskCardSelector.value;

  if (selectedCardValue === "nouvelleCarte") {
    // Demander à l'utilisateur le nom de la nouvelle carte (liste)
    let newCardName = prompt("Nom de la nouvelle liste :");

    if (newCardName) {
      // Créer une nouvelle carte avec le nom saisi
      let newCard = createNewCard(newCardName);
      document.body.insertBefore(newCard, radialMenu);
      selectedCardValue = newCardName; // Mettre à jour la valeur sélectionnée
    } else {
      // L'utilisateur a annulé la création de la carte, ne rien faire
      return;
    }
  }

  let selectedList = document.getElementById(selectedCardValue);

  if (inputText.value === "") {
    alert("Veuillez insérer une nouvelle tâche !");
    return;
  }

  let li = document.createElement("li");
  li.textContent = inputText.value;

  // Ajouter la tâche à la carte sélectionnée
  selectedList.querySelector("ul").appendChild(li);
  inputText.value = "";
  saveData();
}

// Menu radial
document.body.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  if (e.target.tagName === "LI") {
    selectedTask = e.target;
    let x = e.clientX;
    let y = e.clientY;

    radialMenu.style.top = y + "px";
    radialMenu.style.left = x + "px";
    radialMenu.style.display = "block";
  } else {
    radialMenu.style.display = "none";
  }
}false);

// Gestion des options du menu radial
radialMenu.addEventListener("click", function (e) {
  if (e.target.id === "editTask") {
    // Éditer la tâche (à implémenter)
  } else if (e.target.id === "deleteTask") {
    // Supprimer la tâche
    selectedTask.remove();
    saveData();
  } else if (e.target.id === "checkTask") {
    // Cocher la tâche
    selectedTask.classList.toggle("checked");
    saveData();
  } else if (e.target.id === "urgentTask") {
    // Mettre en urgent (à implémenter)
  }

  radialMenu.style.display = "none";
});

// Reste de votre code pour la gestion des tâches et de l'historique

// Sauvegarder les données
function saveData() {
  // ... (implémenter la sauvegarde des données)
}

// Charger l'historique des tâches
function historyTasks() {
  // ... (implémenter le chargement de l'historique des tâches)
}

historyTasks();
