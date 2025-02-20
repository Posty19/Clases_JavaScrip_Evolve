//Scope
const media = 5;
function suma(a, b) {
  let resultado = 0;
  resultado = a + b;
  //console.log(media);

  return function suma2() {
    console.log(resultado);
  };
}

const clousure = suma(3, 4);

clousure();

//ejemplo mas visual

console.log("******************* Ejemplo *******************");
function crearContador() {
  let conatdor = 0; //VARIABLE LOCAL
  return function () {
    conatdor++;
    console.log(conatdor);
  };
}

const incrementar = crearContador();

incrementar(); //1
incrementar(); //2
incrementar(); //3
incrementar(); //4

//ejemplo mas complejo
console.log("******************* Ejemplo Complejo *******************");
function persona(nombre) {
  return {
    obtenerNombre: function () {
      return nombre;
    },
    cambiarNombre: function (nuevoNombre) {
      nombre = nuevoNombre;
    },
  };
}

const usuario = persona("Diego");

console.log(usuario.obtenerNombre());
usuario.cambiarNombre("Antonio");
console.log(usuario.obtenerNombre());
