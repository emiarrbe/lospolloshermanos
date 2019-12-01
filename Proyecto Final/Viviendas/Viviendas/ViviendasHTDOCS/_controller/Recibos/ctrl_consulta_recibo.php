<?php
    require_once '../../_controller/General.php';

    class Ctrl_Consulta extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "Folio"
            );
            if($this->validaIndices($indices, $data)){
                echo $this->consulta($data);
            }else{
                echo "Faltan indices";
            }
        }
    private function consulta($data){  
        try {
            if ($this->conectaBd()){
            $queryBusqueda = "SELECT * FROM recibo 
                WHERE Folio = :Folio;";
             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':Folio', trim($data['Folio']), PDO::PARAM_STR);
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
