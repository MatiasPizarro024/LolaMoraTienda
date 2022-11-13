var formfin = document.getElementById("formfin");

function addElemento(nombre){
  var formfin = document.getElementById("formfin");
  var h1 = document.createElement("h1");
  h1.innerHTML = nombre;
  formfin.appendChild(h1);
}