<?php session_start();  
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    //Incluir la configuracion
    require_once '../config/config.php';
    //Controlador
    require_once '../_controller/ctrl_buscar.php';
    $ctrl = new CtrlBuscar();