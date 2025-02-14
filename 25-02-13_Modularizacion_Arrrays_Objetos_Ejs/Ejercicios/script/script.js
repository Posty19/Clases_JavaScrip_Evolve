//+++++++++++++++++++++++++++++++++++++++++++1️⃣ Gestión de Inventario

const inventario = [
  { nombre: "Laptop", cantidad: 10, precio: 800 },
  { nombre: "Teclado", cantidad: 50, precio: 20 },
  { nombre: "Ratón", cantidad: 30, precio: 10 },
];

//crear producto
const addProduct = (name, quantity, price) => {
  const product = {
    nombre: name,
    cantidad: quantity,
    precio: price,
  };
  inventario.push(product);
};

//eliminar producto
const delProduct = () => {
  inventario.pop();
};

//filtrar producto por precio mayor al dado
const selectProductByPrice = (price) => {
  const filtrados = inventario.filter((el) => el.precio > price);
  return filtrados;
};
//ordenar productos por cantidad mayor a menor
const orderProductQuantity = () => {
  inventario.sort((a, b) => {
    return b.cantidad - a.cantidad;
  });
};
console.log("*************************** Ej1 ***************************");
addProduct("pantalla", 45, 124);
console.log(selectProductByPrice(50));
orderProductQuantity();
console.log(inventario);

//+++++++++++++++++++++++++++++++++++++++++++2️⃣ Análisis de Notas de Estudiantes

const estudiantes = [
  { nombre: "Juan", nota: 8 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Carlos", nota: 7 },
];

//filtrar por nota >= 6
const filtrarNota = (alumnos) => {
  return alumnos.filter((el) => el.nota > 6);
};
//calcular nota media
const notaMedia = (alumnos) => {
  console.log(typeof alumnos);

  let totAlumnos = alumnos.length;
  let media = 0;
  alumnos.forEach((el) => {
    media += el.nota;
  });

  media = media / totAlumnos;
  return media;
};

//ordenar estudiantes por nota de mayor a menor

const orderAlumnosNota = () => {
  estudiantes.sort((a, b) => {
    return b.nota - a.nota;
  });
};

console.log("*************************** Ej2 ***************************");
console.log(filtrarNota(estudiantes));
console.log(notaMedia(estudiantes));
orderAlumnosNota();
console.log(estudiantes);

//+++++++++++++++++++++++++++++++++++++++++++3️⃣ Historial de Transacciones Bancarias

const transacciones = [200, -50, -100, 350, -20];

//sumar el saldo total

const saldoTotal = (movimientos) => {
  let total = 0;
  movimientos.forEach((el) => {
    total += el;
  });
  return total;
};

//transacciones ñayores a 100

const altasTranasacciones = (movimientos) => {
  return movimientos.filter((el) => el > 100);
};

//invertir el osrden de las transacciones sin reverse
const revertirTransacciones = (movimientos) => {
  let revertidos = [];
  movimientos.forEach((el) => {
    revertidos.unshift(el);
  });
  return revertidos;
};

console.log("*************************** Ej3 ***************************");
console.log(saldoTotal(transacciones));
console.log(altasTranasacciones(transacciones));
console.log(revertirTransacciones(transacciones));

//+++++++++++++++++++++++++++++++++++++++++++4️⃣ Gestión de Tareas (To-Do List)

const tareas = [
  { tarea: "Comprar leche", completada: false },
  { tarea: "Estudiar JavaScript", completada: true },
];

//Añadir tareas
const addTask = (taskName, status) => {
  const taskCopleted = {
    tarea: taskName,
    completada: status,
  };
  tareas.push(taskCopleted);
};

//Marcar tareas como completadas
const completeTask = (tasks, taskName, status) => {
  tasks.forEach((el) => {
    if (el.tarea === taskName) {
      el.completada = status;
    }
  });
  return tasks;
  /*  tareas = tasks.map( el =>{
    if(el.tarea===taskName){
      el.completada = true;
    }
    return el;
  }); */
};
//filtrar completadas e incompletas
const completedTaskFilter = (tasks, compTF) => {
  const filtered = tasks.filter((el) => {
    if (el.completada === compTF) {
      return el;
    }
  });
  return filtered;
};

//conatat tareas pendientes

const pendingTask = (tasks) => {
  let pending = 0;
  tasks.forEach((el) => {
    el.completada === false ? pending++ : "";
  });
  return pending;
};

console.log("*************************** Ej4 ***************************");
addTask("Limpiar baños", false);
completeTask(tareas, "Comprar leche", true);

console.log("tareas completadas");
console.log(completedTaskFilter(tareas, true));
console.log("tareas no completadas");
console.log(completedTaskFilter(tareas, false));
console.log(`total tareas no completadas ${pendingTask(tareas)}`);
console.log("Resultado final de tareas");
console.log(tareas);

//+++++++++++++++++++++++++++++++++++++++++++5️⃣ Operaciones con Nombres de Usuarios

const nombres = ["Ana", "Juan", "Pedro", "Andrés"];

//pasar todo a mayusculas
const mayusNames = (names) => {
  const upperNames = names.map((el) => {
    return el.toUpperCase();
  });
  return upperNames;
};

//filtrar nombres que comienzen por a

const aNames = (names) => {
  const upperNames = names.filter((el) => {
    if (el[0] === "a" || el[0] === "A") {
      return el;
    }
  });
  return upperNames;
};

//ordenar alfabeticamente
nombres.sort();

console.log("*************************** Ej5 ***************************");
console.log(mayusNames(nombres));
console.log(aNames(nombres));

//+++++++++++++++++++++++++++++++++++++++++++6️⃣ Análisis de Datos Climáticos

const temperaturas = [22, 28, 18, 15, 32, 25, 100, -20, -34, -40];

//mayor y menor temperatura

const temExtremas = (temps) => {
  let minTemp = Number.MAX_VALUE;
  let maxTemp = Number.MIN_VALUE;
  temps.forEach((el) => {
    if (el > maxTemp) {
      maxTemp = el;
    } else if (el < minTemp) {
      minTemp = el;
    }
  });
  return (tempsMaxMin = { maxima: maxTemp, minima: minTemp });
};

//temperatturas por encima de la media
const temMedia = (temps) => {
  let total = 0;
  temps.forEach((el) => {
    total += el;
  });
  return total / temps.length;
};

const temSupMedia = (temps) => {
  let media = temMedia(temps);
  console.log(`la temperatura media es: ${media}`);
  const tSupMedia = temps.filter((el) => el > media);
  return tSupMedia;
};

//convertir de Celsius a Fahrenheit
//(temp × 9 / 5) + 3
const tempCtoF = (temps) => {
  const fTemps = temps.map((el) => (el * 9) / 5 + 32);
  return fTemps;
};

console.log("*************************** Ej6 ***************************");
console.log(temExtremas(temperaturas));
console.log("Temperaturas superiores a la media:");
console.log(temSupMedia(temperaturas));
console.log("Temperaturas ºC:");
console.log(temperaturas);
console.log("Temperaturas ºF:");
console.log(tempCtoF(temperaturas));

//+++++++++++++++++++++++++++++++++++++++++++7️⃣ Combinar Listas de Contactos (Operador Spread)

const contactos1 = ["Juan", "Carlos", "Ana"];
const contactos2 = ["Ana", "Pedro", "Luis"];

// unir en un set
//ordenar alfabeticamente
const contactos = [...contactos1, ...contactos2];
contactos.sort();
const setContactos = new Set(contactos);
console.log("*************************** Ej7 ***************************");
console.log("set de contactos ordenado");
console.log(setContactos);

//+++++++++++++++++++++++++++++++++++++++++++8️⃣ Gestión de Carrito de Compras

const carrito = [
  { producto: "Ratón", precio: 20 },
  { producto: "Laptop", precio: 800 },
];

//añadir producto
const addProd = (name, price) => {
  const product = {
    nombre: name,
    precio: price,
  };
  carrito.push(product);
};

//eliminar ultimo producto

const dellLastProd = (carrito) => {
  carrito.pop();
};

//calcular precio del carirrito

const computePrice = (carrito) => {
  let totalprice = 0;
  carrito.forEach((el) => {
    totalprice += el.precio;
  });
  return totalprice;
};

//ordenar por precio

const sortByPrice = (carrito) => {
  const orderedCaddy = carrito.sort((a, b) => {
    return b.precio - a.precio;
  });
  return orderedCaddy;
};

console.log("*************************** Ej8 ***************************");

addProd("teclado", 25);
console.log(carrito);

dellLastProd(carrito);
console.log(carrito);

console.log(`total del carrito: ${computePrice(carrito)}`);

console.log(sortByPrice(carrito));

//+++++++++++++++++++++++++++++++++++++++++++9️⃣ Filtrado de Libros por Autor y Año

const libros = [
  { titulo: "JavaScript Avanzado", autor: "Juan Pérez", año: 2019 },
  { titulo: "JavaScript Básico", autor: "Carlos López", año: 2008 },
];

// libros publicados despues de 2010
const booksPost2010 = (books) => {
  const filtrados = books.filter((el) => el.año > 2010);
  return filtrados;
};

// primer libro de un autor especifico
const bookAuthor = (books,author) => {
  return books.find((el) => el.autor === author);
};

//ordenar libros por año de publicacion
const sortByyear = (books) => {
  const orderedBooks = books.sort((a, b) => {
    return b.precio - a.precio;
  });
  return orderedBooks;
};

console.log("*************************** Ej9 ***************************");
console.log(`Libros de despues del 2010: `);
console.log(booksPost2010(libros));
console.log(`Primer libros del autor Carlos López:`);
console.log(bookAuthor(libros,'Carlos López'));
console.log(`Libros ordenados por año: `);
console.log(sortByyear(libros));

