<?php
sleep(1);
include('config.php');
date_default_timezone_set('America/Bogota');
$zonahoraria = date_default_timezone_get();

$nombre         = $_POST['nombre'];
$fechaInicio    = strtotime($_REQUEST['fechaInicio']);
$fechaFin       = strtotime($_REQUEST['fechaFin']);

$dia = 86400; # 24 horas * 60 minutos por hora * 60 segundos por minuto  (24*60*60)
for($i = $fechaInicio; $i<= $fechaFin; $i+=$dia){
    $fechaUno = date("d-m-Y", $i);
    $QueryInsert = ("INSERT INTO empleados(
        nombre,
        fechaInicio,
        fechaFin
    )
    VALUES (
        '".$nombre. "',
        '".$fechaUno."',
        '".$fechaUno."'
    )");
    $Insert = mysqli_query($con, $QueryInsert); 
}

 include('empleados.php');
?>