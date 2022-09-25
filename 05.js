/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ideas(array) {
  // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
  // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
  // si encontramos por lo menos una 'buena' retornamos 'Activa!'
  // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
  // Por ej:
  // ideas(['hola', 'palabra']) debe devolver 'Fail!'
  // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
  // Tu código aca
  var contador = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] == 'buena'){
      contador++
    }
  }
  if(contador == 1){
    return 'Activa!'
  }
  if(contador == 3){
    return 'Jackpot!'
  } else {
    return 'Fail!'
  }
}

// No modifiques nada debajo de esta linea //

module.exports = ideas