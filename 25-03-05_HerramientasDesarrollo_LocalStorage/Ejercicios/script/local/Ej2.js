/**Ejercicio 2: Lista de tareas con localStorage

Permite agregar tareas a una lista y guárdalas en localStorage para que no se pierdan al recargar la página. */

const item = document.getElementById("item");
let items = [];
const listHtml = document.getElementById("list");

try {
  items = [...localStorage.getItem("lista").split(",")];
  items.forEach((text) => {
    const txt = document.createTextNode(text);
    const li = document.createElement("li");
    li.append(txt);
    listHtml.appendChild(li);
  });
} catch (error) {}

document.getElementById("save").addEventListener("click", (e) => {
  items.push(item.value);
  localStorage.setItem("lista", items);

  const txt = document.createTextNode(item.value);
  const li = document.createElement("li");
  li.append(txt);
  listHtml.appendChild(li);

});
