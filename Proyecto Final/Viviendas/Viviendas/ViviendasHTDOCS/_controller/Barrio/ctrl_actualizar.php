<?php
    require_once '../../_controller/General.php';

    class Ctrl_ActBar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "Cod_reg_br",
                "preciomc"
              
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
            $query = "UPDATE barrio SET 
                    preciomc = :preciomc
                        WHERE Cod_reg_br = :Cod_reg_br;";

             $cmd = $this->cnxBd->prepare($query);
             $cmd->bindValue(':Cod_reg_br', trim($data['Cod_reg_br']), PDO::PARAM_STR);
            
             $cmd->bindValue(':preciomc', trim($data['preciomc']), PDO::PARAM_STR);

                    
                    if($cmd->execute()){
                       
                        $res = array('msg' => 'Barrio actualizado correctamente', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
