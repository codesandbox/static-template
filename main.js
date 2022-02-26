// Cite the Template Script
var source = document.getElementById("profile-template").innerHTML,
  // Compile the Template
  template = Handlebars.compile(source),
  form = document.getElementById("form"),
  preview = document.getElementById("preview"),
  previewBtn = document.getElementById("previewBtn");

fillForm();

previewBtn.addEventListener("click", function () {
  //Default context (or Data)
  var context = getFormData();

  //Pass context to the template
  var html = template(context);

  preview.innerHTML = html;
  document.body.removeChild(form);
});

function getFormData() {
  return {
    title: getValue("title"),
    firstName: getValue("firstName"),
    lastName: getValue("lastName"),
    style: getValue("style"),
    address: getValue("address"),
    address2: getValue("address2"),
    city: getValue("city"),
    state: getValue("state"),
    zip: getValue("zip"),
    email: getValue("email"),
    website: getValue("website"),
    interests: getValue("interests"),
    experience: getValue("experience"),
    style: getValue("style")
  };
}

function getValue(id) {
  return document.getElementById(id).value;
}

function setValue(id, value) {
  document.getElementById(id).value = value;
}

function fillForm() {
  setValue("title", "Mr.");
  setValue("firstName", "Bob");
  setValue("lastName", "Smith");
  setValue("address", "123 Main St.");
  setValue("address2", "Apt. 2");
  setValue("city", "Boston");
  setValue("state", "MA");
  setValue("zip", "02115");
  setValue("email", "bsmith@example.com");
  setValue("website", "www.example.com");
  setValue(
    "interests",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );
  setValue(
    "experience",
    "Nulla quam nisl, porta quis molestie vel, rutrum sit amet ligula."
  );
}
