var formFin = document.getElementById("formFin");

function addElemento(texto){
  var formFin = document.getElementById("formFin");
  var h1 = document.createElement("h1");
  h1.innerHTML = texto;
  formFin.appendChild(h1);
}