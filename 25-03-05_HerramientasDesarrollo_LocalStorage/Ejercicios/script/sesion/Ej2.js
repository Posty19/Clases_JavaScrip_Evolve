/**Ejercicio 2: Contador de visitas en la sesión

Crea un contador que aumente cada vez que el usuario recargue la página, pero que se borre al cerrar la pestaña. */


sessionStorage.setItem('counter',+sessionStorage.getItem('counter')+1);

console.log(sessionStorage.getItem('counter'));