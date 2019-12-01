<?php
    require_once '../../_controller/General.php';

    class Ctrl_ActVi extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "No_rg_Ctr",
                "total_hab",
                "DNI1_pro"
              
            );
            if($this->validaIndices($indices, $data)){
                echo $this->insertar($data);
            }else{
                echo "Faltan indices";
            }
        }
    private function insertar($data){  
        try {
            if ($this->conectaBd()){
            $query = "UPDATE vivienda SET 
                    total_hab = :total_hab,
                    DNI1_pro = :DNI1_pro
                        WHERE No_rg_Ctr = :No_rg_Ctr;";

             $cmd = $this->cnxBd->prepare($query);
             $cmd->bindValue(':No_rg_Ctr', trim($data['No_rg_Ctr']), PDO::PARAM_STR);
             $cmd->bindValue(':total_hab', trim($data['total_hab']), PDO::PARAM_STR);
             $cmd->bindValue(':DNI1_pro', trim($data['DNI1_pro']), PDO::PARAM_STR);

                    
                    if($cmd->execute()){
                       
                        $res = array('msg' => 'Vivienda  actualizada correctamente', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                        return $this->response(200, $res);
                    }
                else{
                    $res = array('msg' => 'No se pudo completar la petición', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
