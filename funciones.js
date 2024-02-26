function leerGET(){ 
    //obtiene la cadena de variables y valores es decir url despues del ?
    var cadGET = location.search.substr(1,location.search.length); 
    //rompe la cadena para separar pares variable=valor
    var arrGET = cadGET.split("&"); 
    var asocGET = new Array(); 
    var variable = ""; 
    var valor = ""; 
    //llena el arreglo asociativo
    for(i=0;i<arrGET.length;i++){ 
        var aux = arrGET[i].split("="); 
        variable = aux[0];
        valor = aux[1];
        valor =valor.replace("+"," ")
        asocGET[variable] = valor; 
    } 
    return asocGET; 
}
function escribir(){
    var paresVarValor = leerGET();
    document.getElementById("nombre").textContent=paresVarValor["nombre"];
    document.getElementById("tipo").textContent=paresVarValor["tipo"];
    document.getElementById("color").textContent=paresVarValor["color"];
    document.getElementById("alimento").textContent=paresVarValor["alimento"];
}

function validarCampos(){
    if(document.getElementById("nombre").value==""){
        alert("El nombre no puede ser vacio.");
        document.getElementById("formMascota").action="uno.html";
        return;
    }
    if(document.getElementById("tipo").value==""){
        alert("El tipo de animal no puede ser vacio");
        document.getElementById("formMascota").action="uno.html";
        return;
    }
    if(document.getElementById("color").value==""){
        alert("Ingrese el color de su mascota.");
        document.getElementById("formMascota").action="uno.html";
        return;
    }
    if(document.getElementById("alimento").value==""){
        alert("Ingrese el alimento de su mascota");
        document.getElementById("formMascota").action="uno.html";
        return;
    } alert("Formulario Enviado");
}