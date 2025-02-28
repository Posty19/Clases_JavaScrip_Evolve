/**6. Cambiar el color de fondo de un div al pasar el ratón por encima 🖱

Objetivo:
Selecciona un div con el id "miDiv" y cambia su color de fondo a #f0f0f0 cuando el ratón pase por encima de él. Usa addEventListener() para escuchar el evento mouseover y mouseout y cambia la propiedad style.backgroundColor. */

document.getElementById("miDiv").addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "#e7e7e7";
});
document.getElementById("miDiv").addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "#fff";
  });
  
