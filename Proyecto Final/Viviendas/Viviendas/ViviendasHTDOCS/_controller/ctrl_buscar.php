<?php 

require_once 'General.php';

class CtrlBuscar extends General {

  public function __construct() {
    echo $this->buscar();
  }
  private function buscar(){
    $servername = "127.0.0.1:3306";
    $username = "root";
    $password = "J3ss1c4.";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password);
    
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";

    
  }
}