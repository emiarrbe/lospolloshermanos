<?php
    require_once '../../_controller/General.php';

    class Ctrl_RegMn extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "nombre_mn",
                "area_mn",
                "perimetro_mn",
                "provincia"
              
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
            $queryBusqueda = "SELECT nombre_mn  FROM municipio 
                WHERE nombre_mn=:nombre_mn;";

             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':nombre_mn', trim($data['nombre_mn']), PDO::PARAM_STR);       
             $cmd->execute();
             $reg=$cmd->fetch();
             if($reg<1){
                    $query = "INSERT INTO municipio (
                                        
                                           nombre_mn,
                                            area_mn,
                                           perimetro_mn,
                                           provincia

                                        ) 
                            VALUES (
        
                            :nombre_mn,
                            :area_mn,
                            :perimetro_mn,
                            :provincia
                            
                           
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':nombre_mn', trim($data['nombre_mn']), PDO::PARAM_STR);
                    $cmd1->bindValue(':area_mn', trim($data['area_mn']), PDO::PARAM_STR);
                    $cmd1->bindValue(':perimetro_mn', trim($data['perimetro_mn']), PDO::PARAM_STR);
                    $cmd1->bindValue(':provincia', trim($data['provincia']), PDO::PARAM_STR);
                   
                    if($cmd1->execute()){
                        return $this->response(200, 'Insercion Exitosa');       
                    }else{
                        $res = array('msg' => 'No se pudo completar la petición', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                        return $this->response(400, $res);
                    }
                }else{
                    $res = array('msg' => 'Ya se encuentra un municipio Registrado', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
