/**9. Mostrar los nombres de los usuarios con su ciudad

Obtén los datos desde https://jsonplaceholder.typicode.com/users y muestra en consola algo como: */

const names = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        printData(data);
    } catch (error) {
        console.log("el error es: ", e.mensaje);
    }
}

const printData = data =>{
    data.forEach(e => {
        console.log(`${e.name} - ciudad: ${e.address.city}`);
    });
}

names();