<?php
session_start();
if(isset($_POST["email"]) && isset($_POST["senha"])){
$login_user = $_POST["email"];
$password_user = $_POST["senha"];
if(!(empty($login_user) or empty($password_user))){
include("conexao.php");

$sql="select email,senha from cliente where email =
'$login_user' and senha = '$password_user'";

$res = mysqli_query($conexao,$sql);

$linha = mysqli_num_rows($res);
// Se as informações tiverem incorretas
if($linha==0)
{
  echo "<script>window.location='login.html#form1';alert('Login ou senha incorretos!');</script>";
}
else
{
$_SESSION["$login_user"] = $_POST["login"];
$_SESSION["$password_user"] = $_POST["senha"];
header('Location: viagem.html');
}
}
//se as caixas estiverem vazias
else{
echo "<script>window.location='login.html#form1';alert('Por favor preencha todos os campos para prosseguir');</script>";
}
}
?>