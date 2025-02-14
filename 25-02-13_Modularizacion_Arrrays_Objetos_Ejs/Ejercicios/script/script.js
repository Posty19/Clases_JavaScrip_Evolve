//1️⃣ Gestión de Inventario

const inventario = [
  { nombre: "Laptop", cantidad: 10, precio: 800 },
  { nombre: "Teclado", cantidad: 50, precio: 20 },
  { nombre: "Ratón", cantidad: 30, precio: 10 },
];

//crear producto
const addProduct = (name,quantity,price)=>{
    const product = {
        nombre:name,
        cantidad:quantity,
        precio:price
    }
    inventario.push(product);
}

//eliminar producto
const delProduct = ()=>{
  inventario.pop();
}

//filtrar producto por precio mayor al dado
const  selectProductByPrice= (price)=>{
  const filtrados = inventario.filter(el => el.precio>price);
  return filtrados;
}
//ordenar productos por cantidad mayor a menor
const orderProductQuantity = ()=>{
  inventario.sort((a,b)=>{
    return b.cantidad - a.cantidad;
  })
}
addProduct('pantalla',45,124);
console.log(selectProductByPrice(50));
orderProductQuantity()
console.log(inventario);

//2️⃣ Análisis de Notas de Estudiantes

