var formfin = document.getElementById("formfin");

function addElemento(nombre){
  var formfin = document.getElementById("formfin");
  var h1 = document.createElement("h1");
  var cont = document.createTextNode(" ¡Su consulta fue recibida! ")
  h1.innerHTML = nombre;
  formfin.appendChild(h1);
  formfin.appendChild(cont);
}

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}