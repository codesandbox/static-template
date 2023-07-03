//className

const teamBox = document.querySelector(".team-box");
const elementTeamBox = teamBox.className;

console.log(elementTeamBox);
teamBox.className = "red"; // перезаписывает класс

//classList метод добавления/удаления одного класса
const teamContainer = document.querySelector(".team-container");

// Добавит класс
teamContainer.classList.add("active");
// Удалить класс
// teamContainer.classList.remove("active");
// Добавить класс, если его нет, а если есть удалить
// teamContainer.classList.toggle("active");
// Проверка наличия класса (true/false)
// teamContainer.classList.contains("active");

const BoxTitle = document.querySelector(".box-title");
BoxTitle.style.color = "red";
// BoxTitle.style.fontSize = "35px";
// или, но при таком подъходе переписываются все сисиэс св-ва
BoxTitle.style.cssText = "color: green; fontSize: 25px;";
