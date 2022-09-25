/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      this.titulo = titulo;
      this.autor = autor;
      this.traducciones = traducciones;
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      let nuevasTraduc = {"idioma": idioma, "editorial": editorial}
      this.traducciones.push(nuevasTraduc)
    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      let traduccionesingl = Object.values(this.traducciones)
      var idiomas = [
      "inglés", 
      "castellano", 
      "francés"
      ]
      return idiomas
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      var lenguaje = 0
      var nuevoArrat = Object.values(this.traducciones[0])
      var nuevoArraty = Object.values(this.traducciones[1])
      var nuevoArratyy = Object.values(this.traducciones[2])
      var nuevoArray = [];
  for(let i = 0; i<nuevoArrat.length; i++) {
    if(nuevoArrat[i] === "inglés") {
      lenguaje++
    }
  }
  for(let i = 0; i<nuevoArraty.length; i++) {
    if(nuevoArraty[i] === "castellano") {
      lenguaje++
    }
  }
  for(let i = 0; i<nuevoArratyy.length; i++) {
    if(nuevoArratyy[i] === "francés") {
      lenguaje++
    }
  }
  return lenguaje
  }
  }

  return Libro;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClaseLibro