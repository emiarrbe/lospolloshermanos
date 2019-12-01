<?php session_start();  
    
    ini_set("display_errors", E_ALL);
    header('Access-Control-Allow-Origin: *');
    //or
    header('Access-Control-Allow-Origin: http://www.tarjetips.com');
    //Incluir la configuracion
    require_once '../config/config.php';
    //Controlador
    require_once '../_controller/ctrl_actualizar.php';
    $ctrl = new CtrlActualizar();