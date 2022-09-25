/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function puntosDelEquipo(array) {
  // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
  // en este formato ["3:1", "2:2", "0:1", ...]
  //la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
  //que su resultado es el primero en cada string
  // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
  // Tu código aca:
  let puntaje = 0;
  if(array[0] === '0:0'||array[1] === '0:0'||array[2] === '0:0'||array[3] === '0:0'||array[4] === '0:0'){
    puntaje = puntaje + 1;
  }
  if(array[0] === '1:0'||array[1] === '1:0'||array[2] === '1:0'||array[3] === '1:0'||array[4] === '1:0'){
    puntaje = puntaje + 3;
  }
  if( array[0] === '2:1'||array[1] === '2:1'||array[2] === '2:1'||array[3] === '2:1'||array[4] === '2:1' ) {
    puntaje = puntaje + 3;
  }
  if(array[0] === '2:2'||array[1] === '2:2'||array[2] === '2:2'||array[3] === '2:2'||array[4] === '2:2'){
    puntaje = puntaje + 1;
  }
  if(array[0] === '3:1'||array[1] === '3:1'||array[2] === '3:1'||array[3] === '3:1'||array[4] === '3:1'){
    puntaje = puntaje + 3;
  } 
  if( array[0] === '2:0'||array[1] === '2:0'||array[2] === '2:0'||array[3] === '2:0'||array[4] === '2:0' ) {
    puntaje = puntaje + 3;
  }
  if(array[0] === '1:1'||array[1] === '1:1'||array[2] === '1:1'||array[3] === '1:1'||array[4] === '1:1'){
    puntaje = puntaje + 1;
  }  
  return puntaje;

}

// No modifiques nada debajo de esta linea //

module.exports = puntosDelEquipo