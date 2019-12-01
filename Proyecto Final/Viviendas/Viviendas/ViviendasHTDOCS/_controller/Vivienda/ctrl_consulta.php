<?php
    require_once '../../_controller/General.php';

    class Ctrl_ConVi extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "No_rg_Ctr"
   
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
            $queryBusqueda = "SELECT * FROM vivienda
                WHERE No_rg_Ctr = :No_rg_Ctr;";
             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':No_rg_Ctr', trim($data['No_rg_Ctr']), PDO::PARAM_STR);
             $cmd->execute();
             $reg=$cmd->fetch();
             if($reg>1){
                return $this->response(200, $reg);       
            }else{
                $res = array('msg' => 'No se encontro la vivienda', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
