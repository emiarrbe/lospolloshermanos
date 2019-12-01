<?php
    require_once 'General.php';

    class CtrlActualizar extends General {

        public function __construct() {
            $data = json_decode(file_get_contents('php://input'), true);
            $indices = array(
                "folio",
                "tipo",
                "telefono",
                "correo",
                "ingresoMensual",
                "comprueba",
                "situacionLaboral",
                "financiamientoVigente",
                "nombre",
                "apellidoPaterno",
                "apellidoMaterno",
                "diaNacimiento",
                "mesNacimiento",
                "anoNacimiento",
                "fechaGuardado",
                "propuestaTarjeta",
                "utm_source",
                "utm_medium",
                "utm_campaign",
                "utm_term", 
                "utm_content"
            );
            if($this->validaIndices($indices, $data)){
                echo $this->actualizar($data);
            }else{
                echo "Faltan indices";
            }
        }
    private function actualizar($data){  
        try {
            if ($this->conectaBd()){
                $var=$data['folio'];
                $query = "UPDATE reporte SET
                tipo=:tipo,
                correo=:correo,
                telefono=:telefono,
                ingresoMensual=:ingresoMensual,
                comprueba=:comprueba,
                situacionLaboral=:situacionLaboral,
                financiamientoVigente=:financiamientoVigente,
                nombre=:nombre,
                apellidoPaterno=:apellidoPaterno,
                apellidoMaterno=:apellidoMaterno,
                diaNacimiento=:diaNacimiento,
                mesNacimiento=:mesNacimiento,
                anoNacimiento=:anoNacimiento,
                propuestaTarjeta=:propuestaTarjeta,
                utm_source=:utm_source,
                utm_medium=:utm_medium,
                utm_campaign=:utm_campaign,
                utm_term=:utm_term, 
                utm_content=:utm_content
                WHERE folio=$var;";
                $cmd = $this->cnxBd->prepare($query);
                $cmd->bindValue(':tipo', trim($data['tipo']), PDO::PARAM_STR);
                $cmd->bindValue(':telefono', trim($data['telefono']), PDO::PARAM_STR);
                $cmd->bindValue(':correo', trim($data['correo']), PDO::PARAM_STR);
                $cmd->bindValue(':ingresoMensual', trim($data['ingresoMensual']), PDO::PARAM_STR);
                $cmd->bindValue(':comprueba', trim($data['comprueba']), PDO::PARAM_STR);
                $cmd->bindValue(':situacionLaboral', trim($data['situacionLaboral']), PDO::PARAM_STR);
                $cmd->bindValue(':financiamientoVigente', trim($data['financiamientoVigente']), PDO::PARAM_STR);
                $cmd->bindValue(':nombre', trim($data['nombre']), PDO::PARAM_STR);
                $cmd->bindValue(':apellidoPaterno', trim($data['apellidoPaterno']), PDO::PARAM_STR);
                $cmd->bindValue(':apellidoMaterno', trim($data['apellidoMaterno']), PDO::PARAM_STR);
                $cmd->bindValue(':diaNacimiento', trim($data['diaNacimiento']), PDO::PARAM_STR);
                $cmd->bindValue(':mesNacimiento', trim($data['mesNacimiento']), PDO::PARAM_STR);
                $cmd->bindValue(':anoNacimiento', trim($data['anoNacimiento']), PDO::PARAM_STR);
                 $cmd->bindValue(':propuestaTarjeta', trim($data['propuestaTarjeta']), PDO::PARAM_STR);
                $cmd->bindValue(':utm_source', trim($data['utm_source']), PDO::PARAM_STR);
                $cmd->bindValue(':utm_medium', trim($data['utm_medium']), PDO::PARAM_STR);
                $cmd->bindValue(':utm_campaign', trim($data['utm_campaign']), PDO::PARAM_STR);
                $cmd->bindValue(':utm_term', trim($data['utm_term']), PDO::PARAM_STR);
                $cmd->bindValue(':utm_content', trim($data['utm_content']), PDO::PARAM_STR);
                if($cmd->execute()){
                    $res = array('msg' => 'Se hizo el update', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                    echo $this->response(200, $res);   
                  }else{
                    $res = array('msg' => 'No se pudo completar la petición', 'fecha' => strftime('%d de %B de %Y a las %H:%M:%S'));
                    echo $this->response(400, $res);
                }
            } else {
                echo '{"Error": 05}';
                die();
        }
        } catch (Exception $ex) {
            echo "Exception -> ";
            var_dump($ex->getMessage());
        }
    }
}