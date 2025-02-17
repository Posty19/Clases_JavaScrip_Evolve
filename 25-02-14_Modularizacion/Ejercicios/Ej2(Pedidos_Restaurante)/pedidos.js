const pedidos = [];

const mostrarPedidos = () => console.log(pedidos);

//agregar un pedido
const agregarPedido = (Id, cliente, platillo) => {
  pedidos.push({ Id, cliente, platillo });
};

//eliminar el primer pedido
const eliminarPrimero = () => pedidos.shift();

//Contar la cantidad total de pedidos (length).

const totalPedidos = () => pedidos.length;

//Encontrar pedidos de un cliente específico (find).

const encontrarPedido = (client) => pedidos.find((el) => (el.cliente = client));

//Obtener solo los nombres de los platillos (map).

const nombresPlatos = () => pedidos.map(el=>el.platillo);

//Saber si hay pedidos de un platillo específico (includes).ç

const platoEspecifico = plato => {
    const platos = [];
    pedidos.forEach(el => {
        platos.push(el.platillo);
    });
    return platos.includes(plato) ? `Existen pedidos con: ${plato}`:`no hay pedidos del plato: ${plato}`
};

module.exports = {
  mostrarPedidos,
  agregarPedido,
  eliminarPrimero,
  totalPedidos,
  encontrarPedido,
  nombresPlatos,
  platoEspecifico
};
