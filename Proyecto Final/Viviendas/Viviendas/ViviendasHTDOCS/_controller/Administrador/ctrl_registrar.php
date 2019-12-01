<?php
    require_once '../../_controller/General.php';

    class Ctrl_registrar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "nombre",
                "correo",
                "username",
                "password",
                "telefono",
                "tipoUsuario",
                "imagen",
                "usuarioRegistro"
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
            $queryBusqueda = "SELECT correo, username, telefono FROM administrador 
                WHERE correo=:correo
                AND username = :username  
                AND telefono = :telefono;";
             $cmd = $this->cnxBd->prepare($queryBusqueda);
             $cmd->bindValue(':correo', trim($data['correo']), PDO::PARAM_STR);
             $cmd->bindValue(':username', trim($data['username']), PDO::PARAM_STR);
             $cmd->bindValue(':telefono', trim($data['telefono']), PDO::PARAM_STR);
             $cmd->execute();
             $reg=$cmd->fetch(PDO::FETCH_OBJ);
             print_r($reg);
             if($reg<1){
                    $query = "INSERT INTO administrador (
                                            nombre,
                                            correo,
                                            username,
                                            password,
                                            telefono,
                                            tipoUsuario,
                                            imagen,
                                            fechaRegistro,
                                            usuarioRegistro
                                        ) 
                            VALUES (
                            :nombre,
                            :correo,
                            :username,
                            MD5(:password),
                            :telefono,
                            :tipoUsuario,
                            :imagen,
                            NOW(),
                            :usuarioRegistro
                            );";
                    $cmd1 = $this->cnxBd->prepare($query);
                    $cmd1->bindValue(':nombre', trim($data['nombre']), PDO::PARAM_STR);
                    $cmd1->bindValue(':correo', trim($data['correo']), PDO::PARAM_STR);
                    $cmd1->bindValue(':username', trim($data['username']), PDO::PARAM_STR);
                    $cmd1->bindValue(':password', trim($data['password']), PDO::PARAM_STR);
                    $cmd1->bindValue(':telefono', trim($data['telefono']), PDO::PARAM_STR);
                    $cmd1->bindValue(':tipoUsuario', trim($data['tipoUsuario']), PDO::PARAM_STR);
                    $cmd1->bindValue(':imagen', trim($data['imagen']), PDO::PARAM_STR);
                    $cmd1->bindValue(':usuarioRegistro', trim($data['usuarioRegistro']), PDO::PARAM_STR);
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
