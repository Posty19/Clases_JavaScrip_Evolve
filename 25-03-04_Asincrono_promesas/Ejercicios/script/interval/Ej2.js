/**Ejercicio 2: Cambiar el color de fondo cada 2 segundos

Cambia el color de fondo de la página cada 2 segundos entre rojo y azul. */


setInterval(()=>{
    const color = document.querySelector('body').style.backgroundColor;
    color !='red'?document.querySelector('body').style.backgroundColor='red':document.querySelector('body').style.backgroundColor='blue'
},2000)