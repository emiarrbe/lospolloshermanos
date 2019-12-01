<?php
    require_once '../../_controller/General.php';

    class Ctrl_ConMn extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "Cod_reg_mn"
   
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
            $queryBusqueda = "SELECT * FROM municipio
                WHERE Cod_reg_mn = :Cod_reg_mn;";
             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':Cod_reg_mn', trim($data['Cod_reg_mn']), PDO::PARAM_STR);
             $cmd->execute();
             $reg=$cmd->fetch();
             if($reg>1){
                return $this->response(200, $reg);       
            }else{
                $res = array('msg' => 'No se encuentró el barrio', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
