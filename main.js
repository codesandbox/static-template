const SUPABASE_URL = "https://prcufqhlptlkphlrglhd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByY3VmcWhscHRsa3BobHJnbGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1OTUwNTAsImV4cCI6MjAwMjE3MTA1MH0.DfBnAeb4GpBVKdZOhGr1eJ7KoOopboZ_02UXaPKFYDQ";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

var user;

function addKeyboardListener() {
  // Add the keydown event listener to the document
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      // Get the element that currently has focus
      let focusedElement = document.activeElement;

      // Check if the focused element is a text field

      if (
        focusedElement.tagName === "INPUT" &&
        focusedElement.type === "text" &&
        (focusedElement.className === "taskinput" ||
          focusedElement.className === "goalinput")
      ) {
        //console.log("The focused text field when Enter was pressed has the ID: " +focusedElement.id);
        //console.log("text value = " + focusedElement.value);

        if (
          focusedElement.value == "" &&
          focusedElement.className === "taskinput"
        ) {
          focusedElement.value = taskPlaceholder;
        } else if (
          focusedElement.value == "" &&
          focusedElement.className === "goalinput"
        ) {
          focusedElement.value = goalPlaceholder;
        }

        if (focusedElement.className === "taskinput") {
          updateTask(focusedElement.id, focusedElement.value);
        } else if (focusedElement.className === "goalinput") {
          updateGoal(focusedElement.id, focusedElement.value);
        }
      }
    }
  });
}

function currentWeek() {
  // Monday is the first day of the week
  moment.updateLocale("en", { week: { dow: 1 } });
  let startOfWeek = moment().startOf("week").format("Do");
  let endOfWeek = moment().endOf("week").subtract(2, "days").format("Do MMMM"); // Subtract 2 days from the end of the week (show Friday)
  return startOfWeek + " - " + endOfWeek;
}

function displayUpcoming(data) {
  let contents = "<div class='heading'><h2>Upcoming</h2></div><br />";

  contents += `<div class="scheduledtask"><div class="goalcheckbox"></div><div class="tasklabel"> xpm - Placeholder Meeting</div></div><br>`;

  /*
  data.forEach(function (item) {
    contents += `<div class="task"><div class="goalcheckbox"></div><div class="tasklabel"> ${item.name} - ${item.is_complete}</div></div><br>`;
  });
  */
  //contents += '<div onClick="addTask()"><a href="#">Add a task</a></div>';

  document.getElementById("upcoming").innerHTML = contents;
}

async function getUpcoming() {
  const { data, error } = await _supabase
    .from("Tasks")
    .select()
    .order("id", { ascending: true });

  if (!error) {
    displayUpcoming(data);
  }
}

function init() {
  addKeyboardListener();
  signInTest();
}

function outputObjectVariables(obj) {
  // Get all the property names of the object
  const propertyNames = Object.keys(obj);

  // Iterate over each property name
  propertyNames.forEach((propertyName) => {
    // Get the value of the property
    const value = obj[propertyName];

    // Print the variable name and its value
    console.log(`${propertyName}:`, value);
  });
}

async function signInTest() {
  var email = "tony.rule@gmail.com";

  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);
  if (params.get("cj") != null) email = "rulecharlienz@gmail.com";
  if (params.get("lulu") != null) email = "lucyrulenz@gmail.com";
  if (params.get("shez") != null) email = "shez_nz@hotmail.com";
  if (params.get("spencer") != null) email = "tonyrule+spencer@gmail.com";
  console.log("email = " + email);

  try {
    const { data, error } = await _supabase.auth.signInWithPassword({
      email: email,
      password: "1"
    });
    user = data.user;
    getGoals();
    getTasks();
    getUpcoming();
  } catch (error) {
    console.error("Error signing in");
  }
}

function showToast(message) {
  var toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.className = "toast show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}

function startOfWeek() {
  moment.updateLocale("en", { week: { dow: 1 } });
  return moment().startOf("week").format("Do MMMM");
}

function today() {
  return moment().format("ddd Do MMMM, YYYY");
}

init();
