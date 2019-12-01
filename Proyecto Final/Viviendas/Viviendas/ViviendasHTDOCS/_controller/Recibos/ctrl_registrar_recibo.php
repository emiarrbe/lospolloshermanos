<?php
    require_once '../../_controller/General.php';

    class Ctrl_registrar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "Folio",
                "No_rg_Ctr2"
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
            $queryBusqueda = "SELECT Folio FROM recibo
                WHERE Folio=:Folio;";
             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':Folio', trim($data['Folio']), PDO::PARAM_STR);
             $cmd->execute();
             $reg=$cmd->fetch(PDO::FETCH_OBJ);
             print_r($reg);
             if($reg<1){
                    $query = "INSERT INTO recibo (
                                            Folio,
                                            Fecha_recibo,
                                            No_rg_Ctr2
                                        ) 
                            VALUES (
                                :Folio,
                                NOW(),
                                :No_rg_Ctr2
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':Folio', trim($data['Folio']), PDO::PARAM_STR);
                    $cmd1->bindValue(':No_rg_Ctr2', trim($data['No_rg_Ctr2']), PDO::PARAM_STR);
                    if($cmd1->execute()){
                        return $this->response(200, 'Insercion Exitosa');       
                    }else{
                        $res = array('msg' => 'No se pudo completar la petición', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                        return $this->response(400, $res);
                    }
                }else{
                    $res = array('msg' => 'Ya se encuentra un usuario Registrado', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
