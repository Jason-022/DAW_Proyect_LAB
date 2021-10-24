function Formulario() {
    var nombre;
    nombre = document.getElementById("nombre").value;

    // modal+="<div class='modal' tabindex='-1'>"
    // modal+="<div class='modal-dialog'>"
    // modal+="<div class='modal-content'>"
    // modal+="<div class='modal-header'>"
    // modal+="<h5 class='modal-title'>Modal title</h5>"
    // modal+="<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"
    // modal+="</div>"
    // modal+="<div class='modal-body'>"
    // modal+="<p>Modal body text goes here.</p>"
    // modal+="</div>"
    // modal+="<div class='modal-footer'>"
    // modal+="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>"
    // modal+="<button type='button' class='btn btn-primary'>Save changes</button>"
    // modal+="</div>"
    // modal+="</div>"
    // modal+="</div>"
    // modal+="</div>"
    
    // document.getElementById("modal").innerHTML = modal;
    console.log(nombre);
    if (nombre != " ") {
        alert("Mensaje guardado")
        
    } else if(nombre == null || nombre == ""){
        alert("Error al guardar")
        
    }



}