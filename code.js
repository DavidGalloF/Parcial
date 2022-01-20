function captura(){
    var nombre= document.getElementById("nombre").value;
    var email= document.getElementById("email").value;
    var telefono= document.getElementById("tel").value;
    localStorage.setItem("textvalue",nombre);
    localStorage.setItem("textvalue2",email);
    localStorage.setItem("textvalue3",telefono);
    location.href= "result.html";
}