<?php
    require_once '../../_controller/General.php';

    class Ctrl_registrar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "apellido_p_pro",
                "apellido_m_pro",
                "nombre_pro",
                "direccion_pro",
                "cuenta_ban_pro"
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
        
                    $query = "INSERT INTO propietario (
                                           
                                            apellido_p_pro,
                                            apellido_m_pro,
                                            nombre_pro,
                                            direccion_pro,
                                            cuenta_ban_pro
                                        ) 
                            VALUES (
    
                                :apellido_p_pro,
                                :apellido_m_pro,
                                :nombre_pro,
                                :direccion_pro,
                                :cuenta_ban_pro
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':apellido_p_pro', trim($data['apellido_p_pro']), PDO::PARAM_STR);
                    $cmd1->bindValue(':apellido_m_pro', trim($data['apellido_m_pro']), PDO::PARAM_STR);
                    $cmd1->bindValue(':nombre_pro', trim($data['nombre_pro']), PDO::PARAM_STR);
                    $cmd1->bindValue(':direccion_pro', trim($data['direccion_pro']), PDO::PARAM_STR);
                    $cmd1->bindValue(':cuenta_ban_pro', trim($data['cuenta_ban_pro']), PDO::PARAM_STR);
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
