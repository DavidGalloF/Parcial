


alert(nombre);
function captura(){
    var nombre= document.getElementById("nombre").value;
    var email= document.getElementById("email").value;
    var telefono= document.getElementById("tel").value;
    location.href= "result.html";

    const pnombre = document.getElementById("nombre2");
    const pemail = document.getElementById("email2");
    const ptel = document.getElementById("telefono2");

    pnombre.textContent = nombre;
    pemail.textContent = email;
    ptel.textContent = telefono;
}