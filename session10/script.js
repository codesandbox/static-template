const form = document.getElementById("booking-form");
console.dir(form);
const nameElement = form.elements["fullName"];

const emailElement = form.elements["email"];
const doctorElement = form.elements["doctor"];
const dateElement = form.elements["date"];

// Info elemetns
const nameInfo = document.getElementById("name-info");
const emailInfo = document.getElementById("email-info");

const button = document.getElementById("submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameElement.value.trim();
  const email = emailElement.value.trim();
  const doctor = doctorElement.value;
  console.log(name, email, doctor);

  const payload = {
    name,
    email,
    doctor,
    osVersion: "mac",
    creationDate: new Date()
  };

  // -------  validate the payload -------
  // let isValid = validateData(payload);

  // if (isValid) {
  //   fetch("url", {
  //     method: "POST",
  //     body: JSON.stringify(payload)
  //   });
  // } else {
  //   console.log("invalid data");
  // }

  // function validateData(payload) {
  //   console.log(payload);
  //   resetError();
  //   let isValid = true;

  //   const { name, email } = payload;

  //   // name validation
  //   const nameRegex = /^[a-zA-Z]+$/;
  //   if (!name) {
  //     isValid = false;
  //     nameInfo.innerHTML = `<div class="invalid"><strong> Name is required </strong> </div>`;
  //   } else if (name.length > 32) {
  //     isValid = false;
  //     nameInfo.innerHTML = `<div class="invalid"><strong> Name Length should be less then 32 </strong> </div>`;
  //   } else if (!name.match(nameRegex)) {
  //     isValid = false;
  //     nameInfo.innerHTML = `<div class="invalid"><strong> No special characters allowed </strong> </div>`;
  //   }

  //   //  email validations

  //   const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (!email) {
  //     isValid = false;
  //     emailInfo.innerHTML = `<div class="invalid"><strong> Email is required </strong> </div>`;
  //   } else if (blockedUsers().includes(email)) {
  //     isValid = false;
  //     emailInfo.innerHTML = `<div class="invalid"><strong> User is Blocked. Please contact Support. </strong> </div>`;
  //   } else if (!email.match(emailRegex)) {
  //     isValid = false;
  //     emailInfo.innerHTML = `<div class="invalid"><strong> Invalid Email </strong> </div>`;
  //   }

  //   return isValid;
  // }

  // function blockedUsers() {
  //   // api here Response -> data

  //   return ["utkarsh@gmail.com", "akash@gmail.com", "priya@yahoo.com"];
  // }

  // function resetError() {
  //   emailInfo.innerHTML = "";
  //   nameInfo.innerHTML = "";
  // }
});

// ------- -------- EVENTS -------------

///// focus -------

// nameElement.addEventListener("focus", () => {
//   console.log("hey i aam focus");
//   nameInfo.innerHTML = "";
// });

//// ------ blur ------

// nameElement.addEventListener("blur", (event) => {
//   console.log("blur is here");

//   const name = event.target.value.trim();
//   // name validation
//   const nameRegex = /^[a-zA-Z]+$/;
//   if (!name) {
//     nameInfo.innerHTML = `<div class="invalid"><strong> Name is required </strong> </div>`;
//   } else if (name.length > 32) {
//     nameInfo.innerHTML = `<div class="invalid"><strong> Name Length should be less then 32 </strong> </div>`;
//   } else if (!name.match(nameRegex)) {
//     nameInfo.innerHTML = `<div class="invalid"><strong> No special characters allowed </strong> </div>`;
//   }
// });

// --------------- keyUp ----------------

// nameElement.addEventListener("keyup", (event) => {
//   const name = event.target.value.trim();
//   const nameElement1 = event.target;
//   nameElement1.value = name.toUpperCase();
// });

// //  -------------- cut copy paste ----------

// nameElement.addEventListener("copy", (event) => {
//   event.preventDefault();
//   console.log("I m COPYING ", event.target.value);
// });

// emailElement.addEventListener("paste", (event) => {
//   event.preventDefault();
//   console.log("I m pasting ", event.target.value);
// });

// ------------- local storage ------

window.addEventListener("beforeunload", () => {
  console.log("unload");
  const payload = {
    name: nameElement.value,
    email: emailElement.value
  };

  localStorage.setItem("sessionInformation", JSON.stringify(payload));
});

// DOMCONTENTLOADED ... as soon as my DOM tree has been created ..

document.addEventListener("DOMContentLoaded", () => {
  const item = JSON.parse(localStorage.getItem("sessionInformation"));
  nameElement.value = item.name;
  emailElement.value = item.email;
  console.log("item", item);
});
