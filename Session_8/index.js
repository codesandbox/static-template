const form = document.getElementById("booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const doctor = document.getElementById("doctor").value;
  var res = "";
  var ele = document.getElementsByName("location");
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) res = ele[i].value;
  }
  const tim = form.elements["date"].value;

  const data = {
    fullName: fullName,
    email: email,
    doctor: doctor,
    location: res,
    date: tim
  };

  makeRequest(data).then((res) => console.log(res));
});

const makeRequest = async (postObject) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(postObject),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((response) => response.json());
};
