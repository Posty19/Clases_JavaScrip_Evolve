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
const bookAuthor = (books, author) => {
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
console.log(bookAuthor(libros, "Carlos López"));
console.log(`Libros ordenados por año: `);
console.log(sortByyear(libros));

//+++++++++++++++++++++++++++++++++++++++++++🔟 Gestión de Inscripciones a un Evento

let participantes = ["Juan", "Ana", "Pedro", "Luis"];

//añadir participantes

const addParticipant = (name) => {
  participantes.push(name);
};

//Eliminar un participante por el nombre

const dellParticipant = (participants, name) => {
  let participants2 = [];
  participants.forEach((el) => {
    el !== name ? participants2.push(el) : "";
  });
  participantes = participants2;
};

//filtrar participantes con letra especifica

const letterParticipant = (participants, letter) => {
  return participants.filter((el) => el.includes(letter));
};

//convertir lista en cadena join

const joinedParticipant = (participants, char) => {
  return participants.join(char);
};

console.log("*************************** Ej10 ***************************");

addParticipant("Josete");
console.log(participantes);

dellParticipant(participantes, "Ana");
console.log(participantes);

console.log(letterParticipant(participantes, "e"));

console.log(joinedParticipant(participantes, "-"));

//+++++++++++++++++++++++++++++++++++++++++++1️⃣1️⃣ Estadísticas de Redes Sociales

const publicaciones = [
  { likes: 50, comentarios: 10 },
  { likes: 200, comentarios: 30 },
  { likes: 120, comentarios: 20 },
];

//calcular total de likes con reduce

const initialValue = 0;
const calcLikes = (posts) => {
  const totalLikes = posts.reduce(
    (tot, val) => (tot += val.likes),
    initialValue
  );
  return totalLikes;
};

//filtrar publicaciones con mas de 100likes

const postMostLiked = (posts) => {
  const filtrados = posts.filter((el) => el.likes > 100);
  return filtrados;
};

//ordenar por popularidad (likes)

const sortMostLiked = (posts) => {
  const ordenados = posts.sort((a, b) => b.likes - a.likes);
  return ordenados;
};

console.log("*************************** Ej11 ***************************");
console.log(`total de likes es:${calcLikes(publicaciones)}`);
console.log(`posts con mas de 100 likes:`);
console.log(postMostLiked(publicaciones));
console.log(`posts ordenados por likes es:`);
console.log(sortMostLiked(publicaciones));

//+++++++++++++++++++++++++++++++++++++++++++1️⃣2️⃣ Sistema de Gestión de Alumnos (Operador Spread + Objetos)

const alumnos = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 17 }
];

//añadir alumno

const addstudent = (name, age) => {
  const student = {
    nombre: name,
    edad: age,
  };
  alumnos.push(student);
};

//modificar alumno especifico con spread

const editStudent = (name,age) => {
  const alumno = [{ nombre: name, edad: age }];
  return [...alumnos,...alumno]
};

//alumnos con mas de 18 años

const oldStudents = (students) => {
  const filtrados = students.filter((el) => el.edad > 18);
  return filtrados;
};

console.log("*************************** Ej12 ***************************");
addstudent('joselito',21)
console.log(alumnos);


console.log(`alumnos mayores de edad:`);
console.log(oldStudents(alumnos));

//+++++++++++++++++++++++++++++++++++++++++++1️⃣3️⃣ Análisis de Palabras en un Texto

const texto = 'El sol me acaricia con sus rallos';

//testo a array
const toArray = frase => frase.split(' ');
const arrText = toArray(texto);

//filtra palabras de mas de 5 caracteres

const palabras5Char = arr => arr.filter(el=>el.length>5);

//ordena port longitud;

const sortStrArr = strArr => strArr.sort((a,b)=>b.length-a.length);

console.log("*************************** Ej13 ***************************");
console.log(arrText);
console.log(palabras5Char(arrText));
console.log(sortStrArr(arrText));

//+++++++++++++++++++++++++++++++++++++++++++1️⃣4️⃣ Simulación de una Cola de Atención

const cola = ['Juan', 'Ana', 'Carlos'];

// añade clientes al final de la cola

const addClient = (queue,client) => queue.push(client);

//atiende clientes con shift

const attendClient = queue  => queue.shift();

//muestra siguinte cliente sin eliminarlo

const seeNextClient = queue  =>  queue[0];

//cuenta total de clientes

const seeTotalClients = queue  =>  queue.length;

console.log("*************************** Ej14 ***************************");

addClient(cola,'juan')
console.log(cola);

attendClient(cola)
console.log(cola);

console.log(`el proximo cliente es: ${seeNextClient(cola)}`);

console.log(`cantidad total de la cola: ${seeTotalClients(cola)}`);

//+++++++++++++++++++++++++++++++++++++++++++1️⃣5️⃣ Gestión de Inventario de Productos (Avanzado con Spread)

let inventario1 = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 20, precio: 30 },
  { nombre: 'mocrofono', cantidad: 0, precio: 40 },
  { nombre: 'Auriculares', cantidad: 0, precio: 90 },
];
const inventario2 = [
  { nombre: 'Ratón', cantidad: 15, precio: 10 },
  { nombre: 'Monitor', cantidad: 5, precio: 200 }
];

//añade nuevos elementos con spread sin modificar el original

const addItem = (stock,item) => newStock = [...stock,item] ;

//actualiza el precio de un producto en concreto

const uptateItemPrice = (stock,itemName,price) => {
  stock.forEach(el => {
    if(el.nombre == itemName){
      el.precio = price;
    }
  });
} 

//elimina productos sin stock

const dellUnstokItems = (stock) => {
  const newStock=[]
  stock.forEach(el => {
    if(el.cantidad > 0){
      newStock.push(el);
    }
  });
  return newStock;
} 

//combina dos inventarios diferente sin duplicados

const concatSoks = (stock1,stock2) => finalStock = new Set([...stock1,...stock2]) ;

console.log("*************************** Ej15 ***************************");

console.log(addItem(inventario1,{ nombre: 'Monitor', cantidad: 5, precio: 200 }));

uptateItemPrice(inventario1,'Laptop',1500);
console.log(inventario1);
inventario1 = dellUnstokItems(inventario1);
console.log(inventario1);

console.log(concatSoks(inventario1,inventario2));