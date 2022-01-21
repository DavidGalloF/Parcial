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
    location.href= "index.html";
}
function anadir(){
    event.preventDefault();
    var gust= document.getElementById("gusto").value;
    let tableRef = document.getElementById("tablagustos");
    let newTableRowRef = tableRef.insertRow(-1);

    let newTypeCellRef = newTableRowRef.insertCell(0);
    newTypeCellRef.textContent = gust;
    newTypeCellRef.classList.add("guss");

    newTypeCellRef = newTableRowRef.insertCell(1);
    newTypeCellRef.textContent = 0;
    newTypeCellRef.classList.add("pors");


    let newEditCell = newTableRowRef.insertCell(2);
    let edit =  document.createElement("a");
    edit.textContent = "Editar";
    newEditCell.appendChild(edit);
    edit.style.color = 	"#0000FF";
    edit.addEventListener("click",() =>{
        edit.textContent = "En edición";
        edit.style.color = 	"#aaa";
        newEditCell.appendChild(edit);
        let g = event.target.parentNode.parentNode.childNodes[0];
        let p = event.target.parentNode.parentNode.childNodes[1];

        g.setAttribute('data-text',g.innerHTML);
        p.setAttribute('data-text2',p.innerHTML);

        var input = document.createElement("input");
        input.setAttribute('type','text');
        input.value = g.innerHTML;
        input.style.width = g.offsetWidth -(g.clientleft * 2) + "px";
        input.style.height = g.offsetHeight -(g.clientleft * 2) + "px";
        input.style.border = "0px";

        g.innerHTML = "";
        g.style.cssText = "padding: 0px 0px";
        g.append(input);
        
        
        var input2 = document.createElement("input");
        input2.setAttribute('type','text');
        input2.value = p.innerHTML;
        input2.style.width = p.offsetWidth -(p.clientleft * 2) + "px";
        input2.style.height = p.offsetHeight -(p.clientleft * 2) + "px";
        input2.style.border = "0px";
        
        p.innerHTML = "";
        p.style.cssText = "padding: 0px 0px";
        p.append(input2);
        p.firstElementChild.select();

        input.onkeypress = function(){
            if (event.keyCode == 13) {
                var td = input.parentElement;
                var orig_text = input.parentElement.getAttribute('data-text');
                var current_text = input.value;
                if (orig_text != current_text) {
                    td.removeAttribute('data-text');
                    td.innerHTML = current_text;
                    td.style.cssText = "padding: 5px";
                    edit.textContent = "Editar";
                    edit.style.color = 	"#0000FF";
                    newEditCell.appendChild(edit);

                    var td2 = input2.parentElement;
                    var orig_text2 = input2.parentElement.getAttribute('data-text2');
                    var current_text2 = input2.value;
                    if (orig_text2 != current_text2) {
                        td2.removeAttribute('data-text2');
                        td2.innerHTML = current_text2;
                        td2.style.cssText = "padding: 5px";
                        if  (current_text2 >= localStorage.getItem("porcentaje")){
                            localStorage.setItem("gusto", current_text);
                            localStorage.setItem("porcentaje", current_text2);
                        }
                    }else {
                        td2.removeAttribute('data-text2');
                        td2.innerHTML = orig_text2;
                        td2.style.cssText = "padding: 5px";

                        if  (orig_text2 >= localStorage.getItem("porcentaje")){
                            localStorage.setItem("gusto", current_text);
                            localStorage.setItem("porcentaje", orig_text2);
                        }
                    }

                }else {
                    td.removeAttribute('data-text');
                    td.innerHTML = orig_text;
                    td.style.cssText = "padding: 5px";
                    edit.textContent = "Editar";
                    edit.style.color = 	"#0000FF";
                    newEditCell.appendChild(edit);

                    var td2 = input2.parentElement;
                    var orig_text2 = input2.parentElement.getAttribute('data-text2');
                    var current_text2 = input2.value;
                    if (orig_text2 != current_text2) {
                        td2.removeAttribute('data-text2');
                        td2.innerHTML = current_text2;
                        td2.style.cssText = "padding: 5px";
                        if  (current_text2 >= localStorage.getItem("porcentaje")){
                            localStorage.setItem("gusto", orig_text);
                            localStorage.setItem("porcentaje", current_text2);
                        }
                    }else {
                        td2.removeAttribute('data-text2');
                        td2.innerHTML = orig_text2;
                        td2.style.cssText = "padding: 5px";
                    }
                }
            }
        }

        input2.onkeypress = function(){
            if (event.keyCode == 13) {
                var td2 = input2.parentElement;
                var orig_text2 = input2.parentElement.getAttribute('data-text2');
                var current_text2 = input2.value;
                if (orig_text2 != current_text2) {
                    td2.removeAttribute('data-text2');
                    td2.innerHTML = current_text2;
                    td2.style.cssText = "padding: 5px";
                    edit.textContent = "Editar";
                    edit.style.color = 	"#0000FF";
                    newEditCell.appendChild(edit);

                    var td = input.parentElement;
                    var orig_text = input.parentElement.getAttribute('data-text');
                    var current_text = input.value;
                    if (orig_text != current_text) {
                        td.removeAttribute('data-text');
                        td.innerHTML = current_text;
                        td.style.cssText = "padding: 5px";
                        if  (current_text2 >= localStorage.getItem("porcentaje")){
                            localStorage.setItem("gusto", current_text);
                            localStorage.setItem("porcentaje", current_text2);
                        }
                    }else {
                        td.removeAttribute('data-text');
                        td.innerHTML = orig_text;
                        td.style.cssText = "padding: 5px";
                        if  (current_text2 >= localStorage.getItem("porcentaje")){
                            localStorage.setItem("gusto", orig_text);
                            localStorage.setItem("porcentaje", current_text2);
                        }
                    }
                }else {
                    td2.removeAttribute('data-text2');
                    td2.innerHTML = orig_text2;
                    td2.style.cssText = "padding: 5px";
                    edit.textContent = "Editar";
                    edit.style.color = 	"#0000FF";
                    newEditCell.appendChild(edit);

                    var td = input.parentElement;
                    var orig_text = input.parentElement.getAttribute('data-text');
                    var current_text = input.value;
                    if (orig_text != current_text) {
                        td.removeAttribute('data-text');
                        td.innerHTML = current_text;
                        td.style.cssText = "padding: 5px";

                        if  (orig_text2 >= localStorage.getItem("porcentaje")){
                            localStorage.setItem("gusto", current_text);
                            localStorage.setItem("porcentaje", orig_text2);
                        }
                    }else {
                        td.removeAttribute('data-text');
                        td.innerHTML = orig_text;
                        td.style.cssText = "padding: 5px";
                    }
                }
            }
        }
    });

    if  (0 >= localStorage.getItem("porcentaje")){
        localStorage.setItem("gusto",gust);
    }
    document.getElementById("gusto").value="";
    document.getElementById("gusto").focus();
}