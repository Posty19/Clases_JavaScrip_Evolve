/**Ejercicio 1: Guardar y recuperar una preferencia de usuario

Guarda un color de fondo elegido por el usuario en localStorage y aplícalo cuando la página se cargue. */

try {
  document.querySelector("body").style.backgroundColor =
    localStorage.getItem("color");
} catch (error) {
  console.log("color no encontrado");
}

document.getElementById("save").addEventListener("click", (e) => {
  const color = document.getElementById("color").value;
  localStorage.setItem("color", color);
  document.querySelector("body").style.backgroundColor = color;
});
