// Навигация по элементу
const htmlElement = document.documentElement; // Весь элемент
console.log(htmlElement);

//
const headElement = document.head; // Элемент head
console.log(headElement);

// УЗЛЫ
const bodyElement = document.body; // Узел body
console.log(bodyElement);

const firstChildNode = bodyElement.firstChild; // Первый дочерний узел body
console.log(firstChildNode);

const lastChildNode = bodyElement.lastChild; // Последний дочерний узел body
console.log(lastChildNode);

const childNodes = bodyElement.childNodes; // Все дочерние УЗЛЫ body (Коллекция)
console.log(childNodes);

console.log(bodyElement.hasChildNodes()); // Проверка наличия дочернего узла body

for (let node of childNodes) {
  // Перебор коллекции
  console.log(node);
}

const previousSiblingNode = bodyElement.previousSibling; // Предудущий узел body
console.log(previousSiblingNode);

const nextSiblingNode = bodyElement.nextSibling; // Следующий узел за body
console.log(nextSiblingNode);

const parentNode = bodyElement.parentNode; // Родительский узел body (html)
console.log(parentNode);

// ЭЛЕМЕНТЫ
const bodyChildren = bodyElement.children; // коллекция дочерних ЭЛЕМЕНТОВ body
console.log(bodyChildren);

const firstChildrenNode = bodyElement.firstElementChild; // Первый дочерний элемент body
console.log(firstChildrenNode);

const lastChildrenNode = bodyElement.lastElementChild; // Последний дочерний элемент body
console.log(lastChildrenNode);

const childrenNodes = bodyElement.childElementNodes; // Все дочерние ЭЛЕМЕНТЫ body (Коллекция)
console.log(childrenNodes);

console.log(bodyElement.hasChildNodes()); // Проверка наличия дочернего элемента body

const previousSibling = bodyElement.previousElementSibling; // Предудущий элемент body
console.log(previousSibling);

const nextSibling = bodyElement.nextElementSibling; // Следующий элемент за body
console.log(nextSibling);

const parent = bodyElement.parentElement; // Родительский элемент body (html)
console.log(parent);

// ПОИСК ПРОИЗВОЛЬНОГО ЭЛЕМЕНТА .querySelectorAll(CSS) CSS-имя класса
const elementOne = document.querySelectorAll(".list"); // Поиск по классу элемента
console.log(elementOne);
const elementTwo = document.querySelectorAll("nav"); // Поиск по тегу элемента
console.log(elementTwo);
const elementThree = document.querySelectorAll("div.burger"); // Поиск по тегу и классу элемента
console.log(elementThree);
const elementFour = document.querySelectorAll(".list>a"); // Поиск по тегу первого класса вложенности
console.log(elementFour);
const elementFive = document.querySelectorAll(".list, .menu-link"); // Поиск по нескольким  классам
console.log(elementFive);
const elementSix = document.querySelectorAll(".list .menu-link"); // Поиск по вложенным  классам
console.log(elementSix);
const elementSeven = document.querySelectorAll("#button-X"); // Поиск по вложенным  классам
console.log(elementSeven);
const elementEight = document.querySelectorAll("[data-item]"); // Поиск по атрибуту если он есть
console.log(elementEight);
const elementNine = document.querySelectorAll("[data-item='85']"); // Поиск по атрибуту, если он есть, со значением
console.log(elementNine);

const elems = elementOne;
console.log(elems[2]); // Получили эл коллекции
for (const item of elems) {
  //Пребор коллекции
  console.log(item);
}
elems.forEach((item) => {
  //Тоже перебор
  console.log(item);
});

const subList = document.querySelectorAll(".list"); //коллекция с классом list
const subItems = subList[0].querySelectorAll("a"); //Элемент а коллеции subList
console.log(subItems);

// querySelector("...") находит первый эллемент коллекции

const elem = document.getElementById("button-X"); // получаем элемент по id  # не нужна
console.log(elem);

const elemsOne = document.getElementsByTagName("li"); // живая коллекция всех объектов по тегу
console.log(elemsOne);

const elemsTwo = document.getElementsByClassName("menu-link"); // живая коллекция всех объектов по классу, класс без .
console.log(elemsTwo);
const elemsThree = document.getElementsByName("menu-link"); // живая коллекция всех объектов по классу, класс без .
console.log(elemsThree); // по имени если есть

// Живая коллекция отличается от статично ткм что в ней актуальная информация (например добавили эл), статичной выводится инфо на моент вызова

// clossets ищет ближайшего родителя поднимаясть наверх
const elemsFour = document.querySelector(".menu-link");
const elemsFive = elemsFour.closest(".header");
console.log(elemsFive);

// matches проверят удовлетваряет ли эл css-селектору и возвращает true/false
// nextElementSubling  ищет следующий элемет
