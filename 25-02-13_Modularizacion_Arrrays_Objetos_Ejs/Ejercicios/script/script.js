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

}

//filtrar producto por precio mayor al dado
const selectProductByPrice = (price)=>{

}
//ordenar productos por cantidad mayor a menor
const orderProductQuantity = ()=>{

}

//2️⃣ Análisis de Notas de Estudiantes