<?php
include('config.php');
$empleados      = ("SELECT * FROM empleados ORDER BY id DESC ");
$resulEmpleado  = mysqli_query($con, $empleados);
?>


<table class="table table-hover table-striped">
    <thead class="thead-dark">
        <th>Empleado</th>
        <th>Fecha Inicio</th>
    </thead>
    <tbody>
    <?php
        while ($filaEmpleado = mysqli_fetch_array($resulEmpleado)) { ?>
        <tr>
            <td><?php echo $filaEmpleado['nombre']; ?></td>
            <td><?php echo $filaEmpleado['fechaInicio']; ?></td>
        </tr>
    <?php } ?>
    </tbody>
</table>