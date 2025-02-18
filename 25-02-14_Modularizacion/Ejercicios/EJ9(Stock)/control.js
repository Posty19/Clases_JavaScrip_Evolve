const productos = [];

const mostrarProductos = () => console.log(productos);

//✅ Agregar productos con stock.

const agregarProductos = (producto, stock) =>
  productos.push({ producto, stock });

//✅ Eliminar un producto (pop).

const dellProduct = () => productos.pop();

//✅ Filtrar productos con stock bajo (filter).

const filtrarProds = () => productos.filter((el) => el.stock < 50);

//✅ Ordenar productos por stock (sort).

const ordenStock = () => productos.sort((a, b) => b.stock - a.stock);

module.exports = {
  mostrarProductos,
  agregarProductos,
  dellProduct,
  filtrarProds,
  ordenStock,
};
