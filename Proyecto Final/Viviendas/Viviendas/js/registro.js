var imagen="null";
var usuarioRegistro="null";
var tipoUsuario="null";
var nombre="null";
var correo= "null";
var username= "null";
var password= "null";
var telefono= "null";
var bandera;
function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img-subir").src = reader.result;
      console.log(reader.result);
      imagen=reader.result;
        }
  }
}
function inicio(){
  var datosLocales = localStorage.getItem('datos');
  var datosLocales1=JSON.parse(datosLocales);
  usuarioRegistro= datosLocales1.tipoUsuario;
  console.log(usuarioRegistro);
  document.getElementById("rest-nombre").style.display='none';
  document.getElementById("rest-correo").style.display='none';
  document.getElementById("rest-username").style.display='none';
  document.getElementById("rest-password").style.display='none';
  document.getElementById("rest-telefono").style.display='none';
  document.getElementById("rest-tipoUsuario").style.display='none';
  if (usuarioRegistro==="Administrador" || usuarioRegistro==="Consultor" ){
  
  }else{
    alert("Inicia sesion como usuario")
    window.location.replace("login.html");
  }

}

function restricciones(){
  nombre= document.getElementById("nombre").value;
  correo= document.getElementById("correo").value;
  username= document.getElementById("username").value;
  password= document.getElementById("password").value;
  telefono= document.getElementById("telefono").value;
  console.log(nombre, correo, username, password,telefono,tipoUsuario)
  if((nombre==="") || (nombre==="null")){
    document.getElementById("rest-nombre").style.display='block';
    bandera=false;
  }else{
    bandera=true;
    document.getElementById("rest-nombre").style.display='none';
  }
  if((correo==="") || (correo==="null")){
    document.getElementById("rest-correo").style.display='block';
    bandera=false;
  }else{
    document.getElementById("rest-correo").style.display='none';
    bandera=true;
  }
  if((username==="") || (username==="null")){
    document.getElementById("rest-username").style.display='block';
    bandera=false;
  }else{
    document.getElementById("rest-username").style.display='none';
    bandera=true;
  }
  if((password==="") || (password==="null")){
    document.getElementById("rest-password").style.display='block';
    bandera=false;
  }else{
    document.getElementById("rest-password").style.display='none';
    bandera=true;
  }
  if((telefono==="") || (telefono==="null")){
    document.getElementById("rest-telefono").style.display='block';
    bandera=false;
  }else{
    document.getElementById("rest-telefono").style.display='none';
    bandera=true;
  }
  if((tipoUsuario==="") || (tipoUsuario==="null")){
    document.getElementById("rest-tipoUsuario").style.display='block';
    bandera=false;
  }else{
    bandera=true;
    document.getElementById("rest-tipoUsuario").style.display='none';
  }
}
function enviarDatos(){
  restricciones();
  if(bandera===true){
    var url = 'http://localhost:8888/BaseDeDatos/_post/Administrador/registro.php';
    var datos = {
        nombre:nombre,
        correo:correo,
        username:username,
        password:password,
        telefono:telefono,
        tipoUsuario:tipoUsuario,
        imagen:imagen,
        usuarioRegistro:usuarioRegistro
    };  
    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(datos),
    mode:"cors" // data can be `string` or {object}!
    }).then((response)=>{
       response.json().then((data) => {
         console.log(data);
         if(data.codigo==200){
           alert("Usuario guardado correctamente")
           window.location.replace("login.html");
         }else{
           alert("Intentalo de nuevo");
         }
       });
   })
     .catch(error => console.error('Error:', error))
     .then(response => console.log('Success:', response));
  }
}

function selectTipo(){
  var selectBox = document.getElementById("selectTipo");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  tipoUsuario=selectedValue;
}