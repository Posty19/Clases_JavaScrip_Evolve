//Ejercicio 1: Suma Condicional de Números

const arraNumeros = [10, 30, 35, 96, 12, 5, 7, 55, 63, 45, 8, 193];
let totalEj1 = 0;
const sumaCondicional = (numArr) => {
  numArr.forEach((num) => {
    num > 10 && num % 3 === 0 ? (totalEj1 += num) : "";
  });
  return totalEj1;
};
console.log(`Resultado Ej1`);
console.log(sumaCondicional(arraNumeros));

//Ejercicio 2: Invertir Claves y Valores de un Objeto

const objeto = { a: "uno", b: "dos", c: "tres" };
const invertirObjeto = (obj) => {
  let invertido = {};

  for (const key in obj) {
    invertido[obj[key]] = key;
  }

  return invertido;
};
console.log(`Resultado Ej2`);
console.log(invertirObjeto(objeto));

//Ejercicio 3: Filtrar Palabras Largas

const palabras = ["elefante", "águila", "cielo", "oso", "universo"];
const filtrarPalabras = () => {
  let longWords = [];

  palabras.forEach((el) => {
    if (el.length > 5) {
      //console.log(el);
      longWords.push(el);
    }
  });
  return longWords;
};
console.log(`Resultado Ej3`);
console.log(filtrarPalabras(palabras));

//Ejercicio 4: Contar Tipos de Datos en un Array

const arrayTipos = [
  1,
  "hola",
  true,
  42,
  false,
  "mundo",
  null,
  undefined,
  null,
  75,
  "palabra",
  true,
];

const contarTipos = (arrTip) => {
  const contadorTipos = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
  };
  arrTip.forEach((el) => {
    let tipo = typeof el;

    switch (tipo) {
      case "string":
        contadorTipos.string++;
        break;
      case "number":
        contadorTipos.number++;
        break;
      case "boolean":
        contadorTipos.boolean++;
        break;
      case "object":
        contadorTipos.object++;
        break;
      case "undefined":
        contadorTipos.undefined++;
        break;
      default:
        return "Ha ocurrido algun error";
    }
  });
  return contadorTipos;
};
console.log(`Resultado Ej4`);
console.log(contarTipos(arrayTipos));

//Ejercicio 5: Calcular Estadísticas de un Array Numérico

const calcularEstadisticas = (numbers) => {
  const resultado = {
    suma: 0,
    promedio: 0,
    max: -9999, //Number.MIN_VALUE
    min: 9999, //Number.MAX_VALUE
  };
  numbers.forEach((el) => {
    resultado.suma += el;
    if (el > resultado.max) {
      resultado.max = el;
    } else if (el < resultado.min) {
      resultado.min = el;
    }
  });
  resultado.promedio = parseFloat(resultado.suma / numbers.length);
  return resultado;
};
console.log(`Resultado Ej5`);
console.log(calcularEstadisticas(arraNumeros));

//Ejercicio 6: Mostrar Información de Estudiantes

const alumnos = [
  { nombre: "Hannibal", edad: 60, curso: "A" },
  { nombre: "Faceman", edad: 40, curso: "A" },
  { nombre: "Murdock", edad: 50, curso: "A" },
  { nombre: "B.A. Baracus", edad: 45, curso: "A" },
];

const mostrarEstudiantes = (als) => {
  als.forEach((el) => {
    console.log(
      `${el.nombre} tiene ${el.edad} años y está inscrito en el curso ${el.curso}`
    );
  });
};
console.log(`Resultado Ej6`);
mostrarEstudiantes(alumnos);

//jercicio 7: Fusionar Objetos con Claves Únicas

const object1 = { a: 1, b: 2, d: 6, e: 9 };
const object2 = { b: 3, c: 4, e: 3, f: 5, g: 7, h: 3, i: 22 };
const fusionarObjetos = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  let objFin = {};
  keys1.forEach((el) => {
    objFin[el] = null;
  });
  keys2.forEach((el) => {
    objFin[el] = null;
  });
  for (const key in objFin) {
    obj1[key] ? (objFin[key] = obj1[key]) : "";
  }
  for (const key in objFin) {
    obj2[key] ? (objFin[key] = obj2[key]) : "";
  }
  return objFin;
  /* 
    //Sin Object.keys()
  for (const key in obj2) {
    obj1[key] = obj2[key];
  }
    return obj1;
   */
};
console.log(`Resultado Ej7`);
console.log(fusionarObjetos(object1, object2));

// Ejercicio 8: Encontrar la Palabra Más Larga en un Array

const palabraMasLarga = (pals) => {
  let palabraLarga = "";
  pals.forEach((el) => {
    el.length > palabraLarga.length ? (palabraLarga = el) : "";
  });
  return palabraLarga;
};
console.log(`Resultado Ej8`);
console.log(palabraMasLarga(palabras));

//Ejercicio 9: Validar Propiedades en un Objeto

const objetoValidar = { nombre: "Hannibal", edad: 60, curso: "A" };
const claves1 = ["nombre", "edad", "curso"];
const claves2 = ["nombre", "edad", "equipo"];

const validarPropiedades = (obj, keys) => {
  //const objKeys = Object.keys(obj);
  let valido = false;
  for (const key in obj) {
    keys.includes(key) ? (valido = true) : (valido = false);
  }
  return valido;
};
console.log(`Resultado Ej9`);
console.log(validarPropiedades(objetoValidar, claves1));
console.log(validarPropiedades(objetoValidar, claves2));

//Ejercicio 10: Contar Caracteres en un Texto

const palabra = "programacion";
const contarCaracteres = (palabra) => {
  let result = {};
  for (const key in palabra) {
    result[palabra[key]] ? result[palabra[key]]++ : (result[palabra[key]] = 1);
  }
  return result;
};
console.log(`Resultado Ej10`);
console.log(contarCaracteres(palabra));

// Resultado esperado: { p: 1, r: 2, o: 2, g: 1, a: 2, m: 1, c: 1, i: 1, n: 1 }
