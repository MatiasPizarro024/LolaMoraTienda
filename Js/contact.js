var formfin = document.getElementById("formfin");

function addElemento(texto){
  var formfin = document.getElementById("formfin");
  var h1 = document.createElement("h1");
  h1.innerHTML = texto;
  formfin.appendChild(h1);
}