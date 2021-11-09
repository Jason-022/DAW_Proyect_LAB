var myArrayObject = [];
var divState;
function init() {
    console.log("Carga de la página finalizada.");
    if(addEventListener){
        document.getElementById('add').addEventListener('click',guardar,false);
        document.getElementById('del').addEventListener('click',Eliminar,false);
        document.getElementById('get').addEventListener('click',obtain,false);
        document.getElementById('dd').addEventListener('click',DelateData,false);

        
        
    }
    
    if(typeof(Storage) == "undefined"){
    alert("El navegador no doporta HTML5 y almacenamiento local. Se recomienda actualizarlo.");
    }
    else {
    console.log("El navegador soporta localStorage y sessionStorage.");
    divState = document.getElementById("inf");
    }
    divState = document.getElementById("inf");
    if(typeof(localStorage) == "undefined"){
    divState.style.display = 'none';
    }
    else{
    divState.style.display = 'block';
    }
}
function guardar() {
    var myName = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("msg");
    var errorcard1 = document.getElementById("errorcardNombre");
    var errorcard2 = document.getElementById("errorcardEmail");
    var errorcard3 = document.getElementById("errorcardMsg");
    var msg;
    expcard=/^[a-zA-Z]$/im;
    console.log(myName);

    if(!myName.value ){
        errorcard1.classList.add("visible");
        myName.classList.add("invalid");
        email.classList.add("invalid");
        msj1="Ingrese su nombre";
        errorcard1.innerHTML=msj1;
    }else if(!msg.value){
        errorcard3.classList.add("visible");
        msg.classList.add("invalid");
        msj2="Ingrese su mensaje";
        errorcard3.innerHTML=msj2;
    }else if(!email.value){
        errorcard2.classList.add("visible");
        email.classList.add("invalid");
        msj3="ingrese su correo";
        errorcard2.innerHTML=msj3;
    } else if(expcard.test(myName.value)){
        errorcard2.classList.add("visible");
        myName.classList.add("invalid");
        msj2="Formato invalido";
        errorcard2.innerHTML=msj2;
    }
    // else if(!expcard.test(myName.value)){
    //     errorcard1.classList.add("visible");
    //     myName.classList.add("invalid");
    //     msj1="Formato invalido";
    //     errorcard1.innerHTML=msj1;
    // }
    else{
        errorcard1.classList.remove("visible");
        errorcard2.classList.remove("visible");
        myName.classList.remove("invalid");
        

        //Verificar si se puede utilizar localStorage en el navegador
        var personObject = new Object();
        personObject.name = myName.value;
        personObject.email = email.value;
        personObject.msg = msg.value;
        myArrayObject.push(personObject);
        localStorage.setItem("person", JSON.stringify(myArrayObject));
    try {
        localStorage.setItem("name", myName.value);
        
        localStorage.setItem("email", email.value);

        localStorage.setItem("msg", msg.value);        
        myName.value = "";
        email.value = "";
        msg.value = "";
        
        msgI = "Datos guardados en el localStorage.";
        console.log(msg);
        document.getElementById("inf").innerHTML = msgI;
        //Mostrar al usuario mensaje de estado
        divState.innerHTML = "<p>" + msg + "</p>";
        }
        catch (e) {
        //Verificar si el límite de almacenamiento no se ha sobrepasado
        if (e >= QUOTA_EXCEEDED_ERR) {
        console.log("Error: Límite para almacenamiento local se ha alcanzado.");
        }
        else {
        console.log("Error: Guardando en el almacenamiento local.");
        }
        }
    }
    
}
function obtain() {
    var msg1 = "Obteniendo el dato " + localStorage.key(0) + " y " +
    localStorage.key(1) + " desde el localStorage.";
    var myName = document.getElementById("name");
    var email;
    email = document.getElementById("email");
    var msg = document.getElementById("msg");
    console.log(msg1);
    document.getElementById("inf").innerHTML = msg1;
    myName.value = localStorage.getItem("name");
    email.value = localStorage.getItem("email");
    msg.value = localStorage.getItem("msg");
    

}
// function guardar() {
//     var nombre = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     console.log(nombre);
//     console.log(email);
//     var msg;
//     //Verificar si se puede utilizar localStorage en el navegador
//     try {
//     localStorage.setItem("name", nombre.value);
//     localStorage.setItem("email", email.value);
//     nombre.value = "";
//     email.value = "";
//     msg = "Datos guardados en el localStorage.";
//     console.log(msg);
//     //Mostrar al usuario mensaje de estado
//     divState.innerHTML = "<p>" + msg + "</p>";
//     }
//     catch (e) {
//     //Verificar si el límite de almacenamiento no se ha sobrepasado
//     if (e >= QUOTA_EXCEEDED_ERR) {
//     console.log("Error: Límite para almacenamiento local se ha alcanzado.");
//     }
//     else {
//     console.log("Error: Guardando en el almacenamiento local.");
//     }
//     }
// }
function Eliminar() {
    msgI = "Removiendo dato del localStorage.";
    document.getElementById("inf").innerHTML = msgI;
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("msg");
    myArrayObject = "";
    
}
function DelateData() {
    localStorage.clear();
}
function Controlador($scope, $log) {

    $scope.registrar = function(usuario) {
      $log.info('Usuario: ');
      $log.info(usuario);
      $log.info('fue registrado correctamente!');
    };
  };

if(window.addEventListener){
    window.addEventListener("load", init, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", init);
    }