<?php session_start();  
    
    ini_set("display_errors", E_ALL);//Muestra los errores de PHP
    header('Access-Control-Allow-Origin: *');//Agrego el header permite el acceso desde cualquier otro sitio usando el comodín
    //or
    //Incluir la configuracion
    require_once '../../config/config.php';//Llamo las credenciales de la Conexion
    //Controlador
    require_once '../../_controller/Habitantes/ctrl_consulta_habitante.php';//Llamo las el controlador
    $ctrl = new Ctrl_Consulta();//Llamo la funcion insertar