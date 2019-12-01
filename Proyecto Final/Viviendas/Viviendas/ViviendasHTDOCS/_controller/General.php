<?php
/*
*   @author Jessica Estrada
*/
    class General {
        protected $cnxBd = null;
        /*
        * Crea una conexion a la base de datos especificada en 'config'
        * @return boolean
        */
        protected function conectaBd(){
            if($this->cnxBd != null){
                return true;
            }
            else {
                try{
                    $this->cnxBd = new PDO('mysql:host='.BD_HOST.';dbname='.BD_NAME.';charset=utf8', BD_USER, BD_PASS);
                    //Excepciones SQL
                    $this->cnxBd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $this->cnxBd->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
                    return true;
                }
                catch (PDOException $e) {
                    $this->errores[] = "Error en la conexion con la Base de Datos.";
                    return false;
                }
            }
        }
        protected function validaIndices($indices, $datos){
            $bool = true; // Si este valor no cambia, todos los indices existen
            foreach ($indices as $key) {
              if(is_array($datos)){
                if (!array_key_exists($key, $datos)) {
                  $bool = false; // Si algún indice no existe
                  break;
                }
              }else{
                $bool = false;
                break;
              }
            }
            return $bool;
        }

        protected function response($status = 200, $json = null){
          $response = array('codigo' => $status, 'body' => $json);
          return json_encode($response);
        }
      
    }
?>