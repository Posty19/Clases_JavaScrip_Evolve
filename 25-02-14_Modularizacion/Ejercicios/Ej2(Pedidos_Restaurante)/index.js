const {
  mostrarPedidos,
  agregarPedido,
  eliminarPrimero,
  totalPedidos,
  encontrarPedido,
  nombresPlatos,
  platoEspecifico,
} = require("./pedidos.js");

//agregar pedidol
agregarPedido("1", "Ana", "Croquetas");
agregarPedido("2", "Juan", "Solomillo");
agregarPedido("3", "Lucia", "Ensalada");
mostrarPedidos();

//eliminar primer pedido
eliminarPrimero();
mostrarPedidos();

//total de pedidos
console.log(`El total de pedidos es: ${totalPedidos()}`);

//encontrar pedido de un cliente
console.log(`el pedido de Juan es: ` );
console.log(encontrarPedido('Juan'));

//nombres de los platos
console.log(nombresPlatos());

//mostrar pedido con un plato especifico
console.log(platoEspecifico('Ensalada'));