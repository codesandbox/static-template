const link = document.querySelector(".team-link");
const input = document.querySelector(".field");
console.log(link.href);
console.log(input.href);

console.log(link.value);
console.log(input.value);

console.dir(link); // список всех свойств

const text = document.querySelector(".description-content");
//проверяем аличие атрибута
//text.hasAttribute("name");
// Получаем значение атрибута
//text.getAttribute("name");
// Устанавливаем значенеи атрибута
//text.setAttribute("name", "value");
//Удаляем атрибут
//text.removeAttribute("name");

text.setAttributes("some-attribute", "some-value");
