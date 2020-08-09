const input = document.getElementById("input");

const savedText = localStorage.getItem("Saved Text");
input.value = savedText;

input.addEventListener("keyup", event => {
  //console.log(event.currentTarget);
  console.log(input.value);
  localStorage.setItem("Saved Text", input.value);
});

//Something else I can do with local storage: Save the text to a custom string name. When I open Quick Note Clone next time, I can sselect the note I want to open from a drop-down menu. No need to fuss wiht saving a file to my computer.
