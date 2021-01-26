<?php
header("Conten-Type:application/json");
$request_body = file_get_contents("php://input");
$data = json_decode($request_body);
$fp = fopen($data->fname,"w+");
fwrite($fp,$request_body);
?>
