//AJAX
function AJAX(atributo,valor){
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function{
    return this.responseText;
  }
  xhttp.open("POST", "cadastro.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(atributo + "='" + valor + "'");
}

//código para validar o nome
function ValidateName() {
  var inputName = document.getElementsByName("name");
  var name = inputName.value;
  var exist = AJAX("name",name);
  if (name == undefined || name == null){
    campo vermelho;
  }elseif(exist == true){
    campo vermelho, já existe;
  }else{

  }
}

//código para validar a primeira senha
function ValidatePWD() {
  var pwd = document.getElementsByName("password").value;
  if(pwd == undefined || pwd == null){
    campo vermelho
  }
  if(pwd.length < 8){
    campo vermelho
  }
  if(pwd.match() != true){

  }

  
}

function ValidateVPWD() {
  var vpwd = document.getElementsByName("vpassword").value;
  if(vpwd == undefined || vpwd == null){
    campo vermelho
  }
  if(vpwd.length < 8){
    campo vermelho
  }
  if(vpwd.match() != true){
    
  }

  
}

function ValidateRecaptcha(){
  var recap = document.getElementsByName("recaptcha");
  if (recap.check == true){
    return true;
  }else{
    campo vermelho
  }
}

function ValidateTerms(){
  var terms = document.getElementsByName("terms");
  if (terms.check == true){
    return true;
  }else{
    campo vermelho
  }
}
