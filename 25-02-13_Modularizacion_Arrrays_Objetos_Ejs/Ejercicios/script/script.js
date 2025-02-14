//1️⃣ Gestión de Inventario

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

//2️⃣ Análisis de Notas de Estudiantes

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

//3️⃣ Historial de Transacciones Bancarias

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
const revertirTransacciones = (movimientos)=>{
  let revertidos = []
  movimientos.forEach(el => {
    revertidos.unshift(el);
  });
  return revertidos;
}

console.log("*************************** Ej3 ***************************");
console.log(saldoTotal(transacciones));
console.log(altasTranasacciones(transacciones));
console.log(revertirTransacciones(transacciones));
