function submissionFunction() {
  // First checks if all fields are filed then does a POST request with JSON data from form
  let allAreFilled = true;
  document
    .getElementById("myForm")
    .querySelectorAll("[required]")
    .forEach(function (i) {
      if (!allAreFilled) return;

      if (!i.value) {
        allAreFilled = false;
        return;
      }
    });
  if (!allAreFilled) {
    alert("Please complete the entire form before submission.");
  } else {
    // If all fields are filled, then does POST request with JSON data

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "https://frontend-take-home.fetchrewards.com/form";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    };

    // Forms JSON data from form input
    let nameVal = document.getElementById("name").value;
    let emailVal = document.getElementById("email").value;
    let passwordVal = document.getElementById("password").value;
    let occupationVal = document.getElementById("occupation");
    var valueO = occupationVal.options[occupationVal.selectedIndex].text;
    let stateVal = document.getElementById("state");
    var valueS = stateVal.options[stateVal.selectedIndex].text;

    var data = {
      name: nameVal,
      email: emailVal,
      password: passwordVal,
      occupation: valueO,
      state: valueS
    };

    let dataJ = JSON.stringify(data);
    console.log(dataJ);

    xhr.send(dataJ);
    alert("Submission complete.");
  }
}
