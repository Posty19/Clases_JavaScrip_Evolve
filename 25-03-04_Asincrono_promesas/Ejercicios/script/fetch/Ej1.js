/**1. Obtener y mostrar nombres de usuarios

Haz una petición GET a https://jsonplaceholder.typicode.com/users y muestra solo los nombres en la consola. */

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
        console.log(e.name);
    });
}

names();