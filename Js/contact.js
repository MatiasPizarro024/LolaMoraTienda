/*Funcion boton*/
var input =document.getElementById('nombre')
var input2 =document.getElementById('apellido')
var input3 =document.getElementById('email')
var boton =document.getElementById('boton')

input.addEventListener('input', stop)
input2.addEventListener('input', stop)
input3.addEventListener('input', stop)

function stop(){
    if(input.lenght=1){
        boton.classList.remove('boton-ani')
    }
    else{
        boton.classList.add('boton-ani')
    }
}

/*Funcion onclick etiqueta nueva*/
function mb () {
    boton.classList.add('bd')
}

var formfin = document.getElementById("formfin");
function addElemento(nombre){
  var formfin = document.getElementById("formfin");
  var h1 = document.createElement("h1");
  var cont = document.createTextNode(" ¡Su consulta fue recibida! ")
  h1.innerHTML = nombre;
  formfin.appendChild(h1);
  formfin.appendChild(cont);
  boton.onclick= mb ();
}