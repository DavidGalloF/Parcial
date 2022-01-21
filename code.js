localStorage.setItem("porcentaje",0);
function captura(){
    var nombre= document.getElementById("nombre").value;
    var email= document.getElementById("email").value;
    var telefono= document.getElementById("tel").value;
    localStorage.setItem("nom",nombre);
    localStorage.setItem("ema",email);
    localStorage.setItem("tele",telefono);
    location.href= "result.html";
}
function restar(){
    document.getElementById("nombre").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("nombre").focus();
}
function anadir(){
    event.preventDefault();
    var gust= document.getElementById("gusto").value;
    let tableRef = document.getElementById("tablagustos");
    let newTableRowRef = tableRef.insertRow(-1);

    let newTypeCellRef = newTableRowRef.insertCell(0);
    newTypeCellRef.textContent = gust;

    newTypeCellRef = newTableRowRef.insertCell(1);
    newTypeCellRef.textContent = 0;

    newTypeCellRef = newTableRowRef.insertCell(2);
    newTypeCellRef.textContent = 0;

    if  (0 >= localStorage.getItem("porcentaje")){
        localStorage.setItem("gusto",gust);
    }
    document.getElementById("gusto").value="";
    document.getElementById("gusto").focus();
}