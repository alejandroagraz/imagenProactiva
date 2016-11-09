<?php

//$resultado =print_r($_POST);

$recibido[] = $_POST; 
//$resultado['respuesta'] = 'Gracias por sus datos '.$_POST['nombre'].', le llamaremos al '.$_POST['telefono'].' en horario de '.$_POST['horario']; 
echo json_encode($recibido);

?>

