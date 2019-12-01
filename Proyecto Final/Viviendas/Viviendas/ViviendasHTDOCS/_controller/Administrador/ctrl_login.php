<?php
    require_once '../../_controller/General.php';

    class Ctrl_login extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "username",
                "password"
            );
            if($this->validaIndices($indices, $data)){
                echo $this->login($data);
            }else{
                echo "Faltan indices";
            }
        }
    private function login($data){  
        try {
            if ($this->conectaBd()){
            $queryBusqueda = "SELECT username, nombre, password, tipoUsuario FROM administrador 
                WHERE username = :username
                AND password = MD5(:password)";
             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':username', trim($data['username']), PDO::PARAM_STR);
             $cmd->bindValue(':password', trim($data['password']), PDO::PARAM_STR);
             $cmd->execute();
             $reg=$cmd->fetch();
             if($reg>1){
                return $this->response(200, $reg);       
            }else{
                $res = array('msg' => 'No se encuentra usuario Registrado', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                return $this->response(400, $res);
            }
            }else {
                return $this->response(400, "Error en la conexion");
                die();
        }
        } catch (Exception $ex) {
            echo "Exception -> ";
            var_dump($ex->getMessage());
        }
    }
}
