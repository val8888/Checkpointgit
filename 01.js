/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscandoAWally(array) {
  // La función llamada 'buscandoAWally' recibe como argumento un arreglo de 'string' y debe devolver un 'string' que diga
  // 'Encontre a Wally en la posicion [indice del arreglo donde esta]'
  // Ej:
  // buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius']) debe retornar 'Encontre a Wally en la posicion 3'
  // ya que 'Wally' se encuentra en la posicion 3 del arreglo.
  // Tu código aca:
  let posicion = array.indexOf('Wally');
  for(i = 0; i <= array.length; i++){
    if(posicion !== i);
    return 'Encontre a Wally en la posicion ' + posicion;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = buscandoAWally