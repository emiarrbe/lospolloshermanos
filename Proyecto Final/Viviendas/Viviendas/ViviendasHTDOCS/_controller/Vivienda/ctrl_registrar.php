<?php
    require_once '../../_controller/General.php';

    class Ctrl_RegVi extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "calle",
                "numero",
                "piso",
                "metroscua",
                "total_hab",
                "DNI1_pro",
                "Cod_reg_br1"
              
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
            
                    $query = "INSERT INTO vivienda (
                                    
                                           calle,
                                           numero,
                                           piso,
                                           metroscua,
                                           total_hab,
                                           DNI1_pro,
                                           Cod_reg_br1

                                        ) 
                            VALUES (
                            
                            :calle,
                            :numero,
                            :piso,
                            :metroscua,
                            :total_hab,
                            :DNI1_pro,
                            :Cod_reg_br1
                            
                           
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':calle', trim($data['calle']), PDO::PARAM_STR);
                    $cmd1->bindValue(':numero', trim($data['numero']), PDO::PARAM_STR);
                    $cmd1->bindValue(':piso', trim($data['piso']), PDO::PARAM_STR);
                    $cmd1->bindValue(':metroscua', trim($data['metroscua']), PDO::PARAM_STR);
                    $cmd1->bindValue(':total_hab', trim($data['total_hab']), PDO::PARAM_STR);
                    $cmd1->bindValue(':DNI1_pro', trim($data['DNI1_pro']), PDO::PARAM_STR);
                    $cmd1->bindValue(':Cod_reg_br1', trim($data['Cod_reg_br1']), PDO::PARAM_STR);
                   
                    if($cmd1->execute()){
                        return $this->response(200, 'Insercion Exitosa');       
                    }else{
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
