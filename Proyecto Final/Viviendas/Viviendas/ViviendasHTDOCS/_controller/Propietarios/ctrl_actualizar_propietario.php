<?php
    require_once '../../_controller/General.php';

    class Ctrl_Actualizar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "DNI_pro",
                "direccion_pro",
                "cuenta_ban_pro"
            );
            if($this->validaIndices($indices, $data)){
                echo $this->actualizar($data);
            }else{
                echo "Faltan indices";
            }
        }
    private function actualizar($data){  
        try {
            if ($this->conectaBd()){
                $query = "UPDATE propietario SET
                direccion_pro = :direccion_pro,
                cuenta_ban_pro = :cuenta_ban_pro
                WHERE DNI_pro = :DNI_pro;";
                $cmd = $this->cnxBd->prepare($query);
                $cmd->bindValue(':DNI_pro', trim($data['DNI_pro']), PDO::PARAM_STR);
                $cmd->bindValue(':direccion_pro', trim($data['direccion_pro']), PDO::PARAM_STR);
                $cmd->bindValue(':cuenta_ban_pro', trim($data['cuenta_ban_pro']), PDO::PARAM_STR);
                if($cmd->execute()){
                    $res = array('msg' => 'Se hizo el update', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                    echo $this->response(200, $res);   
                  }else{
                    $res = array('msg' => 'No se pudo completar la petición', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                    echo $this->response(400, $res);
                }
            } else {
                echo '{"Error": 05}';
                die();
        }
        } catch (Exception $ex) {
            echo "Exception -> ";
            var_dump($ex->getMessage());
        }
    }
}