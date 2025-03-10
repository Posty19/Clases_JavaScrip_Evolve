/**Ejercicio 3: Contador de visitas persistente

Crea un contador que aumente cada vez que el usuario recargue la página y persista incluso si la pestaña se cierra. */

localStorage.setItem('counter',+localStorage.getItem('counter')+1);

console.log(localStorage.getItem('counter'));