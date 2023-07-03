// Получение и изменение элементов
const textElement = document.querySelector(".minimal"); // Получили объект
console.log(textElement);

const textElementContent = textElement.innerHTML; // Получили содержимое
console.log(textElementContent);

textElement.innerHTML = "Maximal"; // меняет содержимое

const headerTitle = document.querySelector(".header-link");
console.log(headerTitle);
headerTitle.innerHTML = "<p>Делать бренды заметными — наша навязчивая идея</p>"; //В консоле будет уже параграф <p></p>

console.log(headerTitle.textContent); //Выведет в консоль текст без тегов
// alert(textElement.innerHTML);  Maximal
// alert(headerTitle.textContent);  Делать бренды заметными — наша навязчивая идея

const headerSubTitle = document.querySelector(".header-subtitle");
const getComment = headerSubTitle.nextSibling;
console.log(getComment); // не выводит потому что комент переноситсья на новую строку
console.log(getComment.data);

const newElemen = document.createElement("div"); // Создать новый элемент
console.log(newElemen);
newElemen.innerHTML = "Однажды лебедь раком щуку...";

const newText = document.createTextNode("Привет собака");
console.log(newText);

const reviewsList = document.querySelector(".header-menu"); // получить объект
const reviewsTextAfter = document.createElement("p"); // создать новый
const reviewsTextBefore = document.createElement("p");
reviewsTextAfter.innerHTML = "Конец списка"; // заполнить
reviewsTextBefore.innerHTML = "Начало списка";
// ВСТАВЛЯЕМ
// После  объекта
// reviewsList.after(reviewsTextAfter);
// Перед объектом
// reviewsList.before(reviewsTextBefore);
//Внутьрь и вначало объекта
reviewsList.prepend(reviewsTextBefore);
//Внутрь и конец объекта
reviewsList.append(reviewsTextAfter);

//.insertAdjacentHTML вставляет объект
textElement.insertAdjacentHTML("beforeend", "iti");
// 'beforebegin' вставить HTML непосредственно перед элементом
// 'afterbegin' вставить HTML в начало элемента
// 'beforeend' вставить HTML в конец элемента
// 'afterend' вставить HTML непосредственно после элемента

// перенести объект
const howWeMake = document.querySelector(".how-we-make"); // Получаем объект
const team = document.querySelector(".team"); // Получаем объект
howWeMake.append(team); // переносим team сразу за howWeMake

//textElement.cloneNode() клонирование
const headerImage = document.querySelector(".header-image"); // Получаем объект
const cloneFooterLogo = headerImage.cloneNode(true); // клонируем, если не указат true то клонируется без содержимого
const teamTitle = document.querySelector(".team-title");

teamTitle.append(cloneFooterLogo); // вставляем клон

//.remove() удалить объект
const footerLogo = document.querySelector(".footer-logo");
footerLogo.remove();
