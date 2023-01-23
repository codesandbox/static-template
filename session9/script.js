const form = document.getElementById("form");
// console.dir(form);

// form.addEventListener("focusin", (event) => {
//   console.log("focus in");
// });

// form.addEventListener("focusout", (event) => {
//   // play with event
//   console.log("focus out");
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("form is about to be submitted");
  console.dir(event);

  const formElements = event.target;
  console.dir(formElements);
  console.dir(formElements.email.value);

  const email = formElements.email.value;
  const name = formElements.name.value;
  const password = formElements.password.value;

  const payload = {
    name: name,
    email: email,
    password: password
  };

  fetch("url", {
    method: "POST",
    body: JSON.stringify(payload)
  });
});

form.addEventListener("keydown", (event) => {
  console.dir(event);
  console.log("keydown");
});
//  not only we are saving a reload we are basically saving sensitive infotmation
// to get leaked....

// Date constructor

// let dateString = new Date();

// console.log(dateString);
// console.log(dateString.getDate());
// console.log(dateString.getTime()); // 1970
// console.log(dateString.toUTCString());

// console.log(dateString.toLocaleDateString());
// console.log(dateString.toLocaleTimeString());
