var tipoUsuario="null";
var username="null";
var password="null";
var bandera;

function inicio(){
    document.getElementById("rest-username").style.display='none';
    document.getElementById("rest-password").style.display='none';
}

function restricciones(){
    username= document.getElementById("username").value;
    password= document.getElementById("password").value;
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
  }


  function enviarDatos(){
    restricciones();
    if(bandera===true){
      var url = 'http://localhost:8888/BaseDeDatos/_post/Administrador/login.php';
      var datos = {
          username:username,
          password:password
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
            var usernameL=data.body.username;
            var nombreL=data.body.nombre;
            var tipoUsuarioL=data.body.tipoUsuario;
            var objecto = { 'username': usernameL, 'nombre': nombreL, 'tipoUsuario': tipoUsuarioL };
            localStorage.setItem('datos', JSON.stringify(objecto));
            window.location.replace("index.html");
           }else{
             alert("Intentalo de nuevo");
           }
         });
     }).catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
    }
  }
  