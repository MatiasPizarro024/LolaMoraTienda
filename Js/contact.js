/*Funcion*/
var inp1 = document.getElementById("nombre");
var inp2 = document.getElementById("apellido");
var inp2 = document.getElementById("email");


/*Funcion onclick*/
var formfin = document.getElementById("formfin");
function addElemento(nombre){
  var formfin = document.getElementById("formfin");
  var h1 = document.createElement("h1");
  var cont = document.createTextNode(" ¡Su consulta fue recibida! ")
  h1.innerHTML = nombre;
  formfin.appendChild(h1);
  formfin.appendChild(cont);
}
