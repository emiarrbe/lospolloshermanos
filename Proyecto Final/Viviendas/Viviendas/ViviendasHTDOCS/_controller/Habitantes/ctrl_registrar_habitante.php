<?php
    require_once '../../_controller/General.php';

    class Ctrl_registrar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
               
                "apellido_p_hab",
                "apellido_m_hab",
                "nombre_hab",
                "edad_hab",
                "No_rg_Ctr1"
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
           
                    $query = "INSERT INTO habitante (
                                        
                                            apellido_p_hab,
                                            apellido_m_hab,
                                            nombre_hab,
                                            edad_hab,
                                            No_rg_Ctr1
                                        ) 
                            VALUES (
                                
                                :apellido_p_hab,
                                :apellido_m_hab,
                                :nombre_hab,
                                :edad_hab,
                                :No_rg_Ctr1
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':apellido_p_hab', trim($data['apellido_p_hab']), PDO::PARAM_STR);
                    $cmd1->bindValue(':apellido_m_hab', trim($data['apellido_m_hab']), PDO::PARAM_STR);
                    $cmd1->bindValue(':nombre_hab', trim($data['nombre_hab']), PDO::PARAM_STR);
                    $cmd1->bindValue(':edad_hab', trim($data['edad_hab']), PDO::PARAM_STR);
                    $cmd1->bindValue(':No_rg_Ctr1', trim($data['No_rg_Ctr1']), PDO::PARAM_STR);
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
