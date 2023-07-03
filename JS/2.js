const contact = document.querySelector(".contact");

// console.log(contact.innerText, contact.ouretText);
console.log(contact.innerHTML, contact.ouretHTML);

contact.innerText = "ТЕЛЕФОН";
contact.ouretText = "Контакты";

contact.ouretHTML = "<div>Контакты ТУТ</div>";

const li = document.getElementsByTagName("li");
