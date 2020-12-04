var objPeople = [
  {
    username: "dawit",
    password: "beza"
  },
  {
    username: "bezawit",
    password: "barkot"
  },
  {
    username: "maraky",
    password: "baye"
  }
];

function getInfo() {
  var username = document.getElementById("username").value;
  var username = document.getElementById("password").value;
  for (i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username && password == objPeople[i].password)
      console.log(username + "is");
  }
}
