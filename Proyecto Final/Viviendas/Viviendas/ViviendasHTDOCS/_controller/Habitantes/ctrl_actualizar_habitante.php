<?php
    require_once '../../_controller/General.php';

    class Ctrl_Actualizar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "DNI_hab",
                "edad_hab",
                "No_rg_Ctr1"
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
                $query = "UPDATE habitante SET
                edad_hab = :edad_hab,
                No_rg_Ctr1 = :No_rg_Ctr1
                WHERE DNI_hab = :DNI_hab;";
                $cmd = $this->cnxBd->prepare($query);
                $cmd->bindValue(':DNI_hab', trim($data['DNI_hab']), PDO::PARAM_STR);
                $cmd->bindValue(':edad_hab', trim($data['edad_hab']), PDO::PARAM_STR);
                $cmd->bindValue(':No_rg_Ctr1', trim($data['No_rg_Ctr1']), PDO::PARAM_STR);
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