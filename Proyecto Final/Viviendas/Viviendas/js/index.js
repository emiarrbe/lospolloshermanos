var seccion="";
var tipoUsuario;
var nombre;
var sections = [
    "propietarios",
    "viviendas",
    "habitantes",
    "municipios",
    "barrios",
    "recibos",
    "administrador",
];
function inicio(){
    document.getElementById("altaRecibos").style.display='none';
    document.getElementById("actualizaBarrio").style.display='none';
    document.getElementById("altaBarrio").style.display='none';
    document.getElementById("actualizaVivivenda").style.display='none';
    document.getElementById("altaMunicipios").style.display='none';
    document.getElementById("altaViviendas").style.display='none';
    document.getElementById("m-Alta").style.visibility="hidden";
    document.getElementById("alta").style.visibility="hidden";
    document.getElementById("m-Actualizacion").style.visibility="hidden";
    document.getElementById("actualizacion").style.visibility="hidden";
    document.getElementById("m-Consulta").style.visibility="hidden";
    document.getElementById("consulta").style.visibility="hidden";
    document.getElementById("m-Baja").style.visibility="hidden";
    document.getElementById("baja").style.visibility="hidden";
    var datosLocales = localStorage.getItem('datos');
    var datosLocales1=JSON.parse(datosLocales);
    nombre= datosLocales1.nombre;
    tipoUsuario=datosLocales1.tipoUsuario;
    if ((tipoUsuario==="Administrador") || (tipoUsuario==="Consultor")){
        document.getElementById("nombre").innerText=nombre;
        document.getElementById("tipoUsuario").innerText=tipoUsuario;
        frontSection("propietarios"); 
        switchCases("propietarios");       
    }else{
      alert("Inicia sesion como Administrador")
      window.location.replace("login.html");
    }
}

function menuPressed(seccion){
    frontSection(seccion);
    switchCases(seccion);
}

function frontSection(seccion){
    for (var i=0; i<sections.length; i++){
        if(sections[i]===seccion){
            document.getElementById("title").innerText=seccion;
            document.getElementById("menuFoto").style.backgroundImage='url("images/'+seccion+'.jpg")';
            document.getElementById(seccion).style.backgroundColor="#006F54";
            document.getElementById(seccion).style.color="white";
        }else{
            document.getElementById(sections[i]).style.backgroundColor="white";
            document.getElementById(sections[i]).style.color="black";
        }
    }

}

function switchCases(menuSeccion){
    
    switch(menuSeccion){
        case 'propietarios':
            document.getElementById("altaHabitantes").style.display='none';
            document.getElementById("consultaHabitantes").style.display='none';
            document.getElementById("actualizaPropietario").style.display='block';
            document.getElementById("altaPropietario").style.display='block';
            document.getElementById("consultaPropietarios").style.display='block';
            document.getElementById("consultaRecibos").style.display='none';
            document.getElementById("altaRecibos").style.display='none';
            document.getElementById("actualizaBarrio").style.display='none';
            document.getElementById("consultaBarrios").style.display='none';
            document.getElementById("consultaMunicipios").style.display='none';
            document.getElementById("altaBarrio").style.display='none';
            document.getElementById("actualizaVivivenda").style.display='none';
            document.getElementById("consultaViviendas").style.display='none';
            document.getElementById("altaMunicipios").style.display='none';
            document.getElementById("m-Alta").style.visibility='visible';
            document.getElementById("altaViviendas").style.display='none';
            document.getElementById("alta").style.visibility='visible';
            document.getElementById("m-Actualizacion").style.visibility='visible';
            document.getElementById("actualizacion").style.visibility='visible';
            document.getElementById("m-Consulta").style.visibility='visible';
            document.getElementById("consulta").style.visibility='visible';
            document.getElementById("m-Baja").style.visibility="hidden";
            document.getElementById("baja").style.visibility="hidden";

        break;
        case 'viviendas':
                document.getElementById("altaHabitantes").style.display='none';
                document.getElementById("consultaHabitantes").style.display='none';
            document.getElementById("actualizaPropietario").style.display='none';
            document.getElementById("altaPropietario").style.display='none';
            document.getElementById("consultaPropietarios").style.display='none';
            document.getElementById("consultaRecibos").style.display='none';
            document.getElementById("altaRecibos").style.display='none';
            document.getElementById("actualizaBarrio").style.display='none';
            document.getElementById("consultaBarrios").style.display='none';
            document.getElementById("altaBarrio").style.display='none';
            document.getElementById("consultaMunicipios").style.display='none';
            document.getElementById("actualizaVivivenda").style.display='block';
            document.getElementById("consultaViviendas").style.display='block';
            document.getElementById("altaMunicipios").style.display='none';   
            document.getElementById("altaViviendas").style.display='block';
            document.getElementById("m-Alta").style.visibility="visible";
            document.getElementById("alta").style.visibility="visible";
            document.getElementById("m-Actualizacion").style.visibility="visible";
            document.getElementById("actualizacion").style.visibility="visible";
            document.getElementById("m-Consulta").style.visibility="visible";
            document.getElementById("consulta").style.visibility="visible";
            document.getElementById("m-Baja").style.visibility="hidden";
            document.getElementById("baja").style.visibility="hidden";
       
        break;
        case 'habitantes':
            document.getElementById("altaHabitantes").style.display='block';
            document.getElementById("consultaHabitantes").style.display='block';
            document.getElementById("actualizaPropietario").style.display='none';
            document.getElementById("altaPropietario").style.display='none';
            document.getElementById("consultaPropietarios").style.display='none';
            document.getElementById("consultaRecibos").style.display='none';
            document.getElementById("altaRecibos").style.display='none';
            document.getElementById("actualizaBarrio").style.display='none';
            document.getElementById("consultaBarrios").style.display='none';
            document.getElementById("altaBarrio").style.display='none';
            document.getElementById("consultaMunicipios").style.display='none';
            document.getElementById("actualizaVivivenda").style.display='none';
            document.getElementById("consultaViviendas").style.display='none';
            document.getElementById("altaMunicipios").style.display='none';
            document.getElementById("altaViviendas").style.display='none';
            document.getElementById("m-Alta").style.visibility="visible";
            document.getElementById("alta").style.visibility="visible";
            document.getElementById("m-Actualizacion").style.visibility="visible";
            document.getElementById("actualizacion").style.visibility="visible";
            document.getElementById("m-Consulta").style.visibility="visible";
            document.getElementById("consulta").style.visibility="visible";
            document.getElementById("m-Baja").style.visibility="visible";
            document.getElementById("baja").style.visibility="visible";
        break;
        case 'municipios':
                document.getElementById("altaHabitantes").style.display='none';
                document.getElementById("consultaHabitantes").style.display='none';
            document.getElementById("actualizaPropietario").style.display='none';
            document.getElementById("altaPropietario").style.display='none';
            document.getElementById("consultaPropietarios").style.display='none';
            document.getElementById("consultaRecibos").style.display='none';
            document.getElementById("altaRecibos").style.display='none';
            document.getElementById("actualizaBarrio").style.display='none';
            document.getElementById("consultaBarrios").style.display='none';
            document.getElementById("altaBarrio").style.display='none';
            document.getElementById("consultaMunicipios").style.display='block';
            document.getElementById("actualizaVivivenda").style.display='none';
            document.getElementById("consultaViviendas").style.display='none';
            document.getElementById("altaMunicipios").style.display='block';
            document.getElementById("altaViviendas").style.display='none';
            document.getElementById("m-Alta").style.visibility="visible";
            document.getElementById("alta").style.visibility="visible";
            document.getElementById("m-Actualizacion").style.visibility="hidden";
            document.getElementById("actualizacion").style.visibility="hidden";
            document.getElementById("m-Consulta").style.visibility="visible";
            document.getElementById("consulta").style.visibility="visible";
            document.getElementById("m-Baja").style.visibility="hidden";
            document.getElementById("baja").style.visibility="hidden";
        break;
        case 'barrios':
                document.getElementById("altaHabitantes").style.display='none';
                document.getElementById("consultaHabitantes").style.display='none';
            document.getElementById("actualizaPropietario").style.display='none';
            document.getElementById("altaPropietario").style.display='none';
            document.getElementById("consultaPropietarios").style.display='none';
            document.getElementById("consultaRecibos").style.display='none';
            document.getElementById("altaRecibos").style.display='none';
            document.getElementById("actualizaBarrio").style.display='block';
            document.getElementById("consultaBarrios").style.display='block';
            document.getElementById("altaBarrio").style.display='block';
            document.getElementById("consultaMunicipios").style.display='none';    
            document.getElementById("actualizaVivivenda").style.display='none';
            document.getElementById("consultaViviendas").style.display='none';
            document.getElementById("altaMunicipios").style.display='none';
            document.getElementById("altaViviendas").style.display='none';
            document.getElementById("m-Alta").style.visibility="visible";
            document.getElementById("alta").style.visibility="visible";    
            document.getElementById("m-Actualizacion").style.visibility="visible";
            document.getElementById("actualizacion").style.visibility="visible";
            document.getElementById("m-Consulta").style.visibility="visible";
            document.getElementById("consulta").style.visibility="visible";
            document.getElementById("m-Baja").style.visibility="hidden";
            document.getElementById("baja").style.visibility="hidden";
       
        break;
        case 'recibos':
                document.getElementById("altaHabitantes").style.display='none';
                document.getElementById("consultaHabitantes").style.display='none';
            document.getElementById("actualizaPropietario").style.display='none';
            document.getElementById("altaPropietario").style.display='none';    
            document.getElementById("consultaPropietarios").style.display='none';
            document.getElementById("consultaRecibos").style.display='block';
            document.getElementById("altaRecibos").style.display='block';
            document.getElementById("actualizaBarrio").style.display='none';
            document.getElementById("consultaBarrios").style.display='none';
            document.getElementById("altaBarrio").style.display='none';
            document.getElementById("consultaMunicipios").style.display='none';
            document.getElementById("actualizaVivivenda").style.display='none';
            document.getElementById("consultaViviendas").style.display='none';
            document.getElementById("altaMunicipios").style.display='none';
            document.getElementById("altaViviendas").style.display='none';
            document.getElementById("m-Actualizacion").style.visibility="hidden";
            document.getElementById("actualizacion").style.visibility="hidden";        
            document.getElementById("m-Alta").style.visibility="visible";
            document.getElementById("alta").style.visibility="visible";
            document.getElementById("m-Consulta").style.visibility="visible";
            document.getElementById("consulta").style.visibility="visible";
            document.getElementById("m-Baja").style.visibility="hidden";
            document.getElementById("baja").style.visibility="hidden";
       
    
        break;
        case "administrador":
            document.getElementById("m-Alta").style.visibility="hidden";
            document.getElementById("alta").style.visibility="hidden";
            document.getElementById("m-Actualizacion").style.visibility="hidden";
            document.getElementById("actualizacion").style.visibility="hidden";
            document.getElementById("m-Consulta").style.visibility="hidden";
            document.getElementById("consulta").style.visibility="hidden";
            document.getElementById("m-Baja").style.visibility="hidden";
            document.getElementById("baja").style.visibility="hidden";
                
        break;  
        default:
        break;
    }

}

function cerrarSesion(){
    document.getElementById("cerrar").style.backgroundColor="#006F54";
    document.getElementById("cerrar").style.color="white";
    localStorage.clear();
    window.location.replace("login.html");
}

function enviarDatosAltaVivienda(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Vivienda/registro.php';
    var calleAltaV=document.getElementById("calleAltaV").value;
    var numeroAltaV=document.getElementById("numeroAltaV").value;
    var pisoAltaV=document.getElementById("pisoAltaV").value;
    var metrosAltaV=document.getElementById("metrosAltaV").value;  
    var totalAltaV=document.getElementById("totalAltaV").value;  
    var dniViAlta=document.getElementById("totalAltaV").value;  
    var codigoRgiAltaV=document.getElementById("codigoRgiAltaV").value;  
    var datos = {
        calle:calleAltaV,
        numero:numeroAltaV,
        piso:pisoAltaV,
        metroscua:metrosAltaV,
        total_hab:totalAltaV,
        DNI1_pro:dniViAlta,
        Cod_reg_br1:codigoRgiAltaV
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Guardado exitosamente");
            document.getElementById("calleAltaV").value="";
            document.getElementById("numeroAltaV").value="";
            document.getElementById("pisoAltaV").value="";
            document.getElementById("metrosAltaV").value="";  
            document.getElementById("totalAltaV").value="";  
            document.getElementById("totalAltaV").value="";  
            document.getElementById("codigoRgiAltaV").value="";
           }if(data.codigo==400){
           alert("Ya existe un registro con ese municipio");
           document.getElementById("calleAltaV").value="";
           document.getElementById("numeroAltaV").value="";
           document.getElementById("pisoAltaV").value="";
           document.getElementById("metrosAltaV").value="";  
           document.getElementById("totalAltaV").value="";  
           document.getElementById("totalAltaV").value="";  
           document.getElementById("codigoRgiAltaV").value="";
          }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosAltaMunicipio(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Municipio/registro.php';
    var nombreMunicipioAlta=document.getElementById("nombreMunicipioAlta").value;
    var areaMunicipioAlta=document.getElementById("areaMunicipioAlta").value;
    var perimetroMunicipioAlta=document.getElementById("perimetroMunicipioAlta").value;
    var provinciaMunicipioAlta=document.getElementById("provinciaMunicipioAlta").value;   
    var datos = {
        nombre_mn:nombreMunicipioAlta,
        area_mn:areaMunicipioAlta,
        perimetro_mn:perimetroMunicipioAlta,
        provincia:provinciaMunicipioAlta
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Guardado exitosamente");
            document.getElementById("nombreMunicipioAlta").value="";
            document.getElementById("areaMunicipioAlta").value="";
            document.getElementById("perimetroMunicipioAlta").value="";
            document.getElementById("provinciaMunicipioAlta").value="";  
            }else if(data.codigo==400){
                console.log(data.body);
               alert("Ya se encuentra Registrado");
               document.getElementById("nombreMunicipioAlta").value="";
               document.getElementById("areaMunicipioAlta").value="";
               document.getElementById("perimetroMunicipioAlta").value="";
               document.getElementById("provinciaMunicipioAlta").value="";  
               }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosConsultaVivienda(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Vivienda/consulta.php';
    var noReg=document.getElementById("noRegConsultaViviendas").value;
    var datos = {
        No_rg_Ctr:noReg }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
            $("#myTable").empty();
            $("#myTable").append('<tr style="background-color: #006F54;font-size: 14px; color: white; "><th  style="color:white; text-align: center; padding:20px;">No Reg</th><th style="padding:20px;color:white; text-align: center;">Calle</th><th style="padding:20px;color:white; text-align: center; ">Numero</th><th style="padding:20px;color:white; text-align: center;">Piso</th><th style="padding:20px;color:white; text-align: center;">Metros Cuadrados</th><th style="padding:20px;color:white; text-align: center;">Total habitantes</th><th style="padding:20px;color:white; text-align: center;">Propietario</th><th style="padding:20px;color:white; text-align: center;">Region</th></tr>');
            $("#myTable").append('<tr style="background-color: #ffffff;font-size: 14px; color: black; "><th  style="color:black; text-align: center; padding:20px;">'+data.body.Cod_reg_br1+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.calle+'</th><th style="padding:20px;color:black; text-align: center; ">'+data.body.numero+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.piso+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.metroscua+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.total_hab+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.DNI1_pro+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.Cod_reg_br1+'</th></tr>');

           }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}
function consultarVivienda(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Vivienda/consulta.php';
    var noReg=document.getElementById("noRegActualizaViviendas").value;
    var datos = {
        No_rg_Ctr:noReg }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           if(data.codigo==200){
               console.log(data.body.calle);
            document.getElementById("calleActualizaV").value=data.body.calle;
            document.getElementById("numeroActualizaV").value=data.body.numero;
            document.getElementById("pisoActualizaV").value=data.body.piso;
            document.getElementById("metrosActualizaV").value=data.body.metroscua;  
            document.getElementById("totalActualizaV").value=data.body.total_hab;  
            document.getElementById("dniViActualiza").value=data.body.DNI1_pro;  
            document.getElementById("codigoRgiActualizaV").value=data.body.Cod_reg_br1;
           }
            else{
             alert("Intentalo de nuevo");
             document.getElementById("calleActualizaV").value="";
            document.getElementById("numeroActualizaV").value="";
            document.getElementById("pisoActualizaV").value="";
            document.getElementById("metrosActualizaV").value="";  
            document.getElementById("totalActualizaV").value="";  
            document.getElementById("dniViActualiza").value="";  
            document.getElementById("codigoRgiActualizaV").value="";
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosActualizarVivienda(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Vivienda/atualizar.php';
    var noReg=document.getElementById("noRegActualizaViviendas").value;
    var totalAltaV=document.getElementById("totalActualizaV").value;
    var dniViAlta=document.getElementById("dniViActualiza").value;
    var datos = {
        No_rg_Ctr:noReg,
        total_hab:totalAltaV,
        DNI1_pro:dniViAlta
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Actualizado exitosamente");
            document.getElementById("calleActualizaV").value="";
            document.getElementById("numeroActualizaV").value="";
            document.getElementById("pisoActualizaV").value="";
            document.getElementById("metrosActualizaV").value="";  
            document.getElementById("totalActualizaV").value="";  
            document.getElementById("dniViActualiza").value="";  
            document.getElementById("codigoRgiActualizaV").value="";
           }if(data.codigo==400){
           alert("Ya existe un registro con ese municipio");
            document.getElementById("calleActualizaV").value="";
            document.getElementById("numeroActualizaV").value="";
            document.getElementById("pisoActualizaV").value="";
            document.getElementById("metrosActualizaV").value="";  
            document.getElementById("totalActualizaV").value="";  
            document.getElementById("dniViActualiza").value="";  
            document.getElementById("codigoRgiActualizaV").value="";
          }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosConsultaMunicipio(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Municipio/consulta.php';
    var noReg=document.getElementById("noRegConsultaMunicipio").value;
    var datos = {
        Cod_reg_mn:noReg }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
            $("#myTable2").empty();
            $("#myTable2").append('<tr style="background-color: #006F54;font-size: 14px; color: white; "><th  style="color:white; text-align: center; padding:20px;">No Reg</th><th style="padding:20px;color:white; text-align: center;">Nombre</th><th style="padding:20px;color:white; text-align: center; ">Perimetro</th><th style="padding:20px;color:white; text-align: center;">Area</th><th style="padding:20px;color:white; text-align: center;">Provincia</th></tr>');
            $("#myTable2").append('<tr style="background-color: #ffffff;font-size: 14px; color: black; "><th  style="color:black; text-align: center; padding:20px;">'+data.body.Cod_reg_mn+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.nombre_mn+'</th><th style="padding:20px;color:black; text-align: center; ">'+data.body.perimetro_mn+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.area_mn+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.provincia+'</th></tr>');

           }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosAltaBarrio(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Barrio/registrar.php';
    var nombreBarrioAlta=document.getElementById("nombreBarrioAlta").value;
    var precioBarrioAlta=document.getElementById("precioBarrioAlta").value;
    var areaBarrioAlta=document.getElementById("areaBarrioAlta").value;
    var perimetroBarrioAlta=document.getElementById("perimetroBarrioAlta").value;  
    var coordenadasBarrioAlta=document.getElementById("coordenadasBarrioAlta").value;  
    var codRegBarrioAlta=document.getElementById("codRegBarrioAlta").value;  
    
    var datos = {
        nombre_br:nombreBarrioAlta,
        preciomc:precioBarrioAlta,
        area_br:areaBarrioAlta,
        perimetro_br:perimetroBarrioAlta,
        coordenadas:coordenadasBarrioAlta,
        Cod_reg_mn1:codRegBarrioAlta,
        
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Guardado exitosamente");
            document.getElementById("nombreBarrioAlta").value="";
            document.getElementById("precioBarrioAlta").value="";
            document.getElementById("areaBarrioAlta").value="";
            document.getElementById("perimetroBarrioAlta").value="";  
            document.getElementById("coordenadasBarrioAlta").value="";  
            document.getElementById("codRegBarrioAlta").value="";  
             }if(data.codigo==400){
           alert("Ya existe un registro con ese municipio");
           document.getElementById("nombreBarrioAlta").value="";
           document.getElementById("precioBarrioAlta").value="";
           document.getElementById("areaBarrioAlta").value="";
           document.getElementById("perimetroBarrioAlta").value="";  
           document.getElementById("coordenadasBarrioAlta").value="";  
           document.getElementById("codRegBarrioAlta").value="";  
             }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosConsultaBarrio(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Barrio/consulta.php';
    var noReg=document.getElementById("noRegConsultaBarrio").value;
    var datos = {
        Cod_reg_br:noReg }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
            $("#myTable3").empty();
            $("#myTable3").append('<tr style="background-color: #006F54;font-size: 14px; color: white; "><th  style="color:white; text-align: center; padding:20px;">No Reg</th><th style="padding:20px;color:white; text-align: center;">Nombre Barrio</th><th style="padding:20px;color:white; text-align: center; ">Precio</th><th style="padding:20px;color:white; text-align: center;">Area</th><th style="padding:20px;color:white; text-align: center;">Perimetro</th><th style="padding:20px;color:white; text-align: center;">Coordenadas</th><th style="padding:20px;color:white; text-align: center;">Codigo Region Municipio </th></tr>');
            $("#myTable3").append('<tr style="background-color: #ffffff;font-size: 14px; color: black; "><th  style="color:black; text-align: center; padding:20px;">'+data.body.Cod_reg_br+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.nombre_br+'</th><th style="padding:20px;color:black; text-align: center; ">'+data.body.preciomc+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.area_br+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.perimetro_br+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.coordenadas+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.Cod_reg_mn1+'</th></tr>');

           }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function consultarBarrio(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Barrio/consulta.php';
    var noReg=document.getElementById("noRegActualizaBarrio").value;
    var datos = {
        Cod_reg_br:noReg }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           if(data.codigo==200){
               console.log(data.body);
               document.getElementById("nombreBarrioActualiza").value=data.body.Cod_reg_br;
               document.getElementById("precioBarrioActualiza").value=data.body.preciomc;
               document.getElementById("areaBarrioActualiza").value=data.body.area_br;
               document.getElementById("perimetroBarrioActualiza").value=data.body.perimetro_br;  
               document.getElementById("coordenadasBarrioActualiza").value=data.body.coordenadas;  
               document.getElementById("codRegBarrioActualiza").value=data.body.Cod_reg_mn1;
           }
            else{
             alert("Intentalo de nuevo");
             document.getElementById("nombreBarrioActualiza").value=data.body.Cod_reg_br;
            document.getElementById("precioBarrioActualiza").value="";
            document.getElementById("areaBarrioActualiza").value="";
            document.getElementById("perimetroBarrioActualiza").value="";  
            document.getElementById("coordenadasBarrioActualiza").value="";  
            document.getElementById("codRegBarrioActualiza").value="";
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosActualizarBarrio(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Barrio/actualizar.php';
    var noReg=document.getElementById("noRegActualizaBarrio").value;
    var totalAltaV=document.getElementById("precioBarrioActualiza").value;

    var datos = {
        Cod_reg_br:noReg,
        preciomc:totalAltaV,
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Actualizado exitosamente");
            document.getElementById("noRegActualizaBarrio").value="";
            document.getElementById("nombreBarrioActualiza").value="";
            document.getElementById("precioBarrioActualiza").value="";
            document.getElementById("areaBarrioActualiza").value="";
            document.getElementById("perimetroBarrioActualiza").value="";  
            document.getElementById("coordenadasBarrioActualiza").value="";  
            document.getElementById("codRegBarrioActualiza").value="";
           }if(data.codigo==400){
           alert("Ya existe un registro con ese municipio");
           document.getElementById("noRegActualizaBarrio").value="";
           document.getElementById("nombreBarrioActualiza").value="";
           document.getElementById("precioBarrioActualiza").value="";
           document.getElementById("areaBarrioActualiza").value="";
           document.getElementById("perimetroBarrioActualiza").value="";  
           document.getElementById("coordenadasBarrioActualiza").value="";  
           document.getElementById("codRegBarrioActualiza").value="";
          }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}


function enviarDatosAltaRecibo(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Recibos/altas.php';
    var folioAltaMunicipio=document.getElementById("folioAltaMunicipio").value;
    var codigoMunicipio=document.getElementById("codigoMunicipio").value;
     var datos = {
        Folio:folioAltaMunicipio,
        No_rg_Ctr2:codigoMunicipio,
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Guardado exitosamente");
            document.getElementById("folioAltaMunicipio").value="";
            document.getElementById("codigoMunicipio").value="";
             }else if(data.codigo==400){
                console.log(data.body);
               alert("Ya se encuentra Registrado");
               document.getElementById("folioAltaMunicipio").value="";
               document.getElementById("codigoMunicipio").value="";
            }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosConsultaRecibo(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Recibos/consultas.php';
    var noReg=document.getElementById("folioReciboConsulta").value;
    var datos = {
        Folio:noReg }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
            $("#myTable4").empty();
            $("#myTable4").append('<tr style="background-color: #006F54;font-size: 14px; color: white; "><th  style="color:white; text-align: center; padding:20px;">Folio</th><th style="padding:20px;color:white; text-align: center;">Fecha de Registro</th><th style="padding:20px;color:white; text-align: center; ">Codigo Vivienda</th></tr>');
            $("#myTable4").append('<tr style="background-color: #ffffff;font-size: 14px; color: black; "><th  style="color:black; text-align: center; padding:20px;">'+data.body.Folio+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.Fecha_recibo+'</th><th style="padding:20px;color:black; text-align: center; ">'+data.body.No_rg_Ctr2+'</th></tr>');
            document.getElementById("folioReciboConsulta").value="";
           }else if(data.codigo==400){
            alert("No se encuentra ningun recibo con ese Folio");   
            $("#myTable4").empty(); 
        }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}


function enviarDatosConsultarPropietario(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Propietarios/consultas.php';
    var dni=document.getElementById("dniPropietario").value;
    var datos = {
        DNI_pro:dni }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
            $("#myTable5").empty();
            $("#myTable5").append('<tr style="background-color: #006F54;font-size: 14px; color: white; "><th  style="color:white; text-align: center; padding:20px;">Apellido Paterno</th><th style="padding:20px;color:white; text-align: center;">Apellido Materno</th><th style="padding:20px;color:white; text-align: center; ">Nombre</th><th style="padding:20px;color:white; text-align: center;">Direccion</th><th style="padding:20px;color:white; text-align: center;">Cuenta Bancaria</th></tr>');
            $("#myTable5").append('<tr style="background-color: #ffffff;font-size: 14px; color: black; "><th  style="color:black; text-align: center; padding:20px;">'+data.body.apellido_p_pro+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.apellido_m_pro+'</th><th style="padding:20px;color:black; text-align: center; ">'+data.body.nombre_pro+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.direccion_pro+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.cuenta_ban_pro+'</th></tr>');
            document.getElementById("dniPropietario").value="";
           }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}


function enviarDatosAltaPropietario(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Propietarios/altas.php';
    var nombrePropietarioAlta=document.getElementById("nombrePropietarioAlta").value;
    var apellidoPPropietarioAlta=document.getElementById("apellidoPPropietarioAlta").value;
    var apellidoMPropietarioAlta=document.getElementById("apellidoMPropietarioAlta").value;
    var direccionPropietarioAlta=document.getElementById("direccionPropietarioAlta").value;  
    var cuentaPropietarioAlta=document.getElementById("cuentaPropietarioAlta").value;  
     
    var datos = {
        nombre_pro:nombrePropietarioAlta,
        apellido_p_pro:apellidoPPropietarioAlta,
        apellido_m_pro:apellidoMPropietarioAlta,
        direccion_pro:direccionPropietarioAlta,
        cuenta_ban_pro:cuentaPropietarioAlta    
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Guardado exitosamente");
            document.getElementById("nombrePropietarioAlta").value="";
            document.getElementById("apellidoPPropietarioAlta").value="";
            document.getElementById("apellidoMPropietarioAlta").value="";
            document.getElementById("direccionPropietarioAlta").value="";  
            document.getElementById("cuentaPropietarioAlta").value="";  
             }if(data.codigo==400){
           alert("Ya existe un registro con ese municipio");
           document.getElementById("nombrePropietarioAlta").value="";
           document.getElementById("apellidoPPropietarioAlta").value="";
           document.getElementById("apellidoMPropietarioAlta").value="";
           document.getElementById("direccionPropietarioAlta").value="";  
           document.getElementById("cuentaPropietarioAlta").value="";  
          }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function consultarPropietario(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Propietarios/consultas.php';
    var dni=document.getElementById("dniPropActualiza").value;
    
    var datos = {
        DNI_pro:dni
        
    }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           if(data.codigo==200){
               console.log(data.body);
               document.getElementById("nombrePropietarioActualiza").value=data.body.nombre_pro;
               document.getElementById("apellidoPPropietarioActualiza").value=data.body.apellido_p_pro;
               document.getElementById("apellidoMPropietarioActualiza").value=data.body.apellido_m_pro;
               document.getElementById("direccionPropietarioActualiza").value=data.body.direccion_pro;  
               document.getElementById("cuentaPropietarioActualiza").value=data.body.cuenta_ban_pro;  ;
           }
            else{
             alert("Intentalo de nuevo");
             document.getElementById("nombrePropietarioActualiza").value="";
             document.getElementById("apellidoPPropietarioActualiza").value="";
             document.getElementById("apellidoMPropietarioActualiza").value="";
             document.getElementById("direccionPropietarioActualiza").value="";  
             document.getElementById("cuentaPropietarioActualiza").value="";  
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosPropietarioActualizar(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Propietarios/actualizar.php';
    var dni=document.getElementById("dniPropActualiza").value;
    var direccionPropietarioActualiza=document.getElementById("direccionPropietarioActualiza").value;  
    var cuentaPropietarioActualiza=document.getElementById("cuentaPropietarioActualiza").value;  
   
    var datos = {
        DNI_pro:dni,
        direccion_pro:direccionPropietarioActualiza,
        cuenta_ban_pro:cuentaPropietarioActualiza    
        
    }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Actualizado exitosamente");
            document.getElementById("nombrePropietarioActualiza").value="";
           document.getElementById("apellidoPPropietarioActualiza").value="";
           document.getElementById("apellidoMPropietarioActualiza").value="";
           document.getElementById("direccionPropietarioActualiza").value="";  
           document.getElementById("cuentaPropietarioActualiza").value="";  
           document.getElementById("dniPropActualiza").value="";

           }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}

function enviarDatosConsultarHabitante(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Habitantes/consultas.php';
    var dni=document.getElementById("noRegHabConsulta").value;
    var datos = {
        DNI_hab:dni }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
            $("#myTable6").empty();
            $("#myTable6").append('<tr style="background-color: #006F54;font-size: 14px; color: white; "><th  style="color:white; text-align: center; padding:20px;">Apellido Paterno</th><th style="padding:20px;color:white; text-align: center;">Apellido Materno</th><th style="padding:20px;color:white; text-align: center; ">Nombre</th><th style="padding:20px;color:white; text-align: center;">Edad</th><th style="padding:20px;color:white; text-align: center;">No de Vivienda</th></tr>');
            $("#myTable6").append('<tr style="background-color: #ffffff;font-size: 14px; color: black; "><th  style="color:black; text-align: center; padding:20px;">'+data.body.apellido_p_hab+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.apellido_m_hab+'</th><th style="padding:20px;color:black; text-align: center; ">'+data.body.nombre_hab+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.edad_hab+'</th><th style="padding:20px;color:black; text-align: center;">'+data.body.No_rg_Ctr1+'</th></tr>');
            document.getElementById("noRegHabConsulta").value="";
           }
            else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}


function enviarDatosAltaHabitante(){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Habitantes/altas.php';
    var nombrePropietarioAlta=document.getElementById("nombreHabitanteAlta").value;
    var apellidoPPropietarioAlta=document.getElementById("apellidoPHabitanteoAlta").value;
    var apellidoMPropietarioAlta=document.getElementById("apellidoMHabitanteoAlta").value;
    var direccionPropietarioAlta=document.getElementById("edadHabitanteAlta").value;  
    var cuentaPropietarioAlta=document.getElementById("noViviendaHAlta").value;  
     
    var datos = {
        nombre_hab:nombrePropietarioAlta,
        apellido_p_hab:apellidoPPropietarioAlta,
        apellido_m_hab:apellidoMPropietarioAlta,
        edad_hab:direccionPropietarioAlta,
        No_rg_Ctr1:cuentaPropietarioAlta    
      }; 
      console.log(JSON.stringify(datos));
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos),
      mode:"cors" // data can be `string` or {object}!
      }).then((response)=>{
         response.json().then((data) => {
           console.log(data);
           if(data.codigo==200){
             console.log(data.body);
            alert("Guardado exitosamente");
            document.getElementById("nombreHabitanteAlta").value="";
            document.getElementById("apellidoPHabitanteoAlta").value="";
            document.getElementById("apellidoMHabitanteoAlta").value="";
            document.getElementById("edadHabitanteAlta").value="";  
            document.getElementById("noViviendaHAlta").value="";  
             }if(data.codigo==400){
           alert("Ya existe un registro con ese municipio");
            document.getElementById("nombreHabitanteAlta").value="";
            document.getElementById("apellidoPHabitanteoAlta").value="";
            document.getElementById("apellidoMHabitanteoAlta").value="";
            document.getElementById("edadHabitanteAlta").value="";  
            document.getElementById("noViviendaHAlta").value="";  
            }
           else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
}