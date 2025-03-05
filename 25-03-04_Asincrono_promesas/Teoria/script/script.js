/* 
setTimeout(() => {
  console.log("ejecutando time out");
}, 10000);
console.log("Ejecutando consolo.log()");

const intervalo = setInterval(() => {
  console.log("ejecutamos interval");
}, 3000);

setTimeout(() => {
  clearInterval(intervalo);
}, 30000);
 */

// PROMESAS

// forma tradicional de tratar promesas
const promesa = new Promise((resolve, reject) => {
  let exito = true;

  if (exito) {
    resolve("peticion realizada con exito");
  } else {
    reject("La peticion ha sido rechazada");
  }
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error))
  .finally(console.log("peticion finalizada")); //no es obligatorio

//FETCH
//forma tradicional de usr promesas
/* 
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0", {
  //cabezeras, protocolos, tipo de peticion (GET, POST, PUT, DELETE ... Y MAS)
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
 */

//ASYNC y AWAIT

async function realizarPeticion(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  return data;
}

realizarPeticion("https://pokeapi.co/api/v2/pokemon?limit=150").then((result) =>
  console.log(result)
);

//BLoqur TRY CATH
try {
  document.getElementById("title").style.color = "red";
  console.log("ejecutando codigo en try catch");
} catch (e) {
  console.log("el error es ", e);
} finally {
  console.log("codigo ejecutado");
}

async function realizarPeticion2(url) { // const peticion = async()=>{}
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (e) {
    console.log("el error es: ", e.mensaje);
  } finally {
    console.log("fin de codigo");
  }
}
