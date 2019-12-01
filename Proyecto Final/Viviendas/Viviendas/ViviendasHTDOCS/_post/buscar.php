<?php session_start();  
    
    ini_set("display_errors", E_ALL);
    header('Access-Control-Allow-Origin: *');
    //or
    //Incluir la configuracion
    require_once '../config/config.php';
    //Controlador
    require_once '../_controller/ctrl_buscar.php';
    $ctrl = new CtrlBuscar();