var source = document.getElementById("template").innerHTML,
  template = Handlebars.compile(source),
  form = document.getElementById("form"),
  preview = document.getElementById("preview"),
  previewBtn = document.getElementById("previewBtn");

fillForm();

previewBtn.addEventListener("click", function () {
  var data = getFormData(),
    html = template(data);

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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur sagittis facilisis. Sed libero tortor, ultrices ut porttitor id, lacinia at odio. In lobortis scelerisque ligula, vitae molestie magna accumsan ac. Proin fringilla, tortor quis convallis condimentum, libero metus tempor orci, nec dignissim nisi lectus a ante. Maecenas vitae sollicitudin massa, nec ultricies felis. Suspendisse id purus et sem condimentum accumsan. Mauris id odio cursus, sollicitudin nisi id, sollicitudin lacus."
  );
  setValue(
    "experience",
    "Donec rutrum interdum dolor, eget semper dolor mattis eget. Aenean interdum ligula vitae malesuada porta. Phasellus lobortis congue fermentum. Duis nec egestas nisl. Nunc sit amet diam ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras euismod aliquam leo, nec blandit leo commodo non."
  );
}
