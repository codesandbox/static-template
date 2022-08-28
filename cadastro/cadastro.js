function obtain() {
  var email = document.getElementById("email").value;
  console.log(email);
}
//AJAX
function AJAX(atributo, valor) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    return this.responseText;
  };
  xhttp.open("POST", "cadastro.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(atributo + "='" + valor + "'");
}

//código para validar o nome
function ValidateEmail() {
  var inputEmail = document.getElementsByName("email");
  var email = inputEmail.value;
  var exist = AJAX("email", email);
  var pEmail = document.getElementById("email-isnt-correct");
  if (
    email === undefined ||
    email === null ||
    email[0] === " " ||
    exist === true
  ) {
    let boxEmail = document.getElementById("email");
    boxEmail.style.backgroundColor = "red";
    pEmail.innerHTML =
      exist === true ? "Este email já está em uso" : "Email inválido";
  } else {
    return true;
  }
}

//código para validar a primeira senha
function ValidatePwd() {
  var pwd = document.getElementsByName("password").value;
  var pPwd = document.getElementById("pwd-isnt-correct");
  if (pwd === undefined || pwd == null) {
    let boxPwd = document.getElementById("pwd");
    boxPwd.style.backgroundColor = "red";
    pPwd.innerHTML = "Senha inválido";
    return false;
  }
  if (pwd.length < 8) {
    pPwd.innerHTML = "Senha inválido";
    return false;
  }
  if (pwd.match("/[0-9]/mu") === false) {
    pPwd.innerHTML =
      "Para sua segurança recomendamos que adicione números a esta senha";
    return false;
  }
  if (pwd.match("/[a-z]/mu") === false || pwd.match("/[A-Z]/mu") === false) {
    pPwd.innerHTML =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    return false;
  }
  if (pwd.match("/[#$%^&*()+=-[]';,./{}|\":<>?~\\\\]/mu") === false) {
    pPwd.innerHTML =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    return false;
  }
  return true;
}

function ValidateCpwd() {
  var cPwd = document.getElementsByName("cpassword").value;
  var pCpwd = document.getElementById("cpwd-isnt-correct");
  if (cPwd === undefined || cPwd == null) {
    let boxCpwd = document.getElementById("cpwd");
    boxCpwd.style.backgroundColor = "red";
    pCpwd.innerHTML = "Senha inválido";
    return false;
  }
  if (cPwd.length < 8) {
    pCpwd.innerHTML = "Senha inválido";
    return false;
  }
  if (cPwd.match("/[0-9]/mu") === false) {
    pCpwd.innerHTML =
      "Para sua segurança recomendamos que adicione números a esta senha";
    return false;
  }
  if (cPwd.match("/[a-z]/mu") === false || cPwd.match("/[A-Z]/mu") === false) {
    pCpwd.innerHTML =
      "Para sua segurança recomendamos que varie entre letras minúsculas e maiusculas nesta senha";
    return false;
  }
  if (cPwd.match("/[#$%^&*()+=-[]';,./{}|\":<>?~\\\\]/mu") === false) {
    pCpwd.innerHTML =
      "Para sua segurança recomendamos que adicione caracteres especiais a esta senha";
    return false;
  }
  return true;
}

function ValidateRecaptcha() {
  var recap = document.getElementsByName("recaptcha");
  if (recap.check === true) {
    return true;
  } else {
    let boxTerms = document.getElementById("recaptcha");
    boxTerms.style.backgroundColor = "red";
    let pTerms = document.getElementById("recaptcha-not-accepted");
    pTerms.innerHTML = "É necessário aceitar os termos para continuar";
    return false;
  }
}

function ValidateTerms() {
  var terms = document.getElementsByName("terms");
  console.log(terms);
  if (terms.check === true) {
    return true;
  } else {
    let boxTerms = document.getElementById("terms-box");
    boxTerms.style.backgroundColor = "red";
    let pTerms = document.getElementById("terms-not-accepted");
    pTerms.innerHTML = "É necessário aceitar os termos para continuar";
    return false;
  }
}

function Validate(event) {
  if (
    ValidatePwd() &&
    ValidateCpwd() &&
    ValidateRecaptcha() &&
    ValidateTerms()
  ) {
  } else {
    event.preventDefault();
  }
}

//Ham menu
function hamMenu(menu) {
  menu.classList.toggle("active");
  var active = menu.classList.contains("active");
  menu.setAttribute("aria-expanded", active);
  if (active) {
    menu.setAttribute("aria-label", "Fechar Menu");
  } else {
    menu.setAttribute("aria-label", "Abrir Menu");
  }
}
