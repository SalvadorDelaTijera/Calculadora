//ESTO AGREGA AL APNATALLA L VALOR DEL BOTON DE LA CALCUALDORA QUE TOQUEMOS
function agregar(valor){
  document.getElementById('pantalla').value += valor;
}

//boirra
function borrar (){
  document.getElementById('pantalla').value = '';
}

// eval toma le valor de un string y lo evalua y lo almacena ne resultado
function calcular (){
  const valorPantalla = document.getElementById('pantalla').value ;
  const resultado = eval(valorPantalla);
  document.getElementById('pantalla').value = resultado;
}