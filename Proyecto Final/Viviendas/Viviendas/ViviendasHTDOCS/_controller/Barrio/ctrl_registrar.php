<?php
    require_once '../../_controller/General.php';

    class Ctrl_RegBar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "nombre_br",
                "preciomc",
                "area_br",
                "perimetro_br",
                "coordenadas",
                "Cod_reg_mn1"
              
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
            $queryBusqueda = "SELECT nombre_br, coordenadas FROM barrio 
                WHERE nombre_br=:nombre_br
                AND coordenadas = :coordenadas;";

             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':nombre_br', trim($data['nombre_br']), PDO::PARAM_STR);
             $cmd->bindValue(':coordenadas', trim($data['coordenadas']), PDO::PARAM_STR);
       
             $cmd->execute();
             $reg=$cmd->fetch(PDO::FETCH_OBJ);
             print_r($reg);
             if($reg<1){
                    $query = "INSERT INTO barrio (
                                    
                                           nombre_br,
                                           preciomc,
                                           area_br,
                                           perimetro_br,
                                           coordenadas,
                                           Cod_reg_mn1

                                        ) 
                            VALUES (
  
                            :nombre_br,
                            :preciomc,
                            :area_br,
                            :perimetro_br,
                            :coordenadas,
                            :Cod_reg_mn1
                            
                           
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':nombre_br', trim($data['nombre_br']), PDO::PARAM_STR);
                    $cmd1->bindValue(':preciomc', trim($data['preciomc']), PDO::PARAM_STR);
                    $cmd1->bindValue(':area_br', trim($data['area_br']), PDO::PARAM_STR);
                    $cmd1->bindValue(':perimetro_br', trim($data['perimetro_br']), PDO::PARAM_STR);
                    $cmd1->bindValue(':coordenadas', trim($data['coordenadas']), PDO::PARAM_STR);
                    $cmd1->bindValue(':Cod_reg_mn1', trim($data['Cod_reg_mn1']), PDO::PARAM_STR);
                   
                    if($cmd1->execute()){
                        return $this->response(200, 'Insercion Exitosa');       
                    }else{
                        $res = array('msg' => 'No se pudo completar la petición', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                        return $this->response(400, $res);
                    }
                }else{
                    $res = array('msg' => 'Ya se encuentra un barrio Registrado', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
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
