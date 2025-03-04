const titulo = document.getElementById("titulo");
const section = document.getElementById("seccion");

//propiedades html element

const parent = titulo.parentNode;
const nextBro = titulo.nextElementSibling; //nextSibling
const prevBro = titulo.previousElementSibling; //previousSibling
const firstChild = section.firstElementChild; //firstChild
const lasttChild = section.lastElementChild; //lastChild

titulo.textContent = "sobreescribir texto";
const txt = titulo.textContent;
const innerTxt = titulo.innerText;
const innerHtml = titulo.innerHTML;

const articulos = document.getElementsByClassName("articulo");
articulos[0].classList.add("clase inventada");
articulos[0].classList.remove("articulo");
console.log(articulos[0].className);

console.log(section.offsetHeight);
console.log(section.offsetWidth);

// crear insertar y eliminar elementos

const numAtr = articulos.length;
const txt2 = document.createTextNode(`texto de articulo ${numAtr + 1}`);
const articulo = document.createElement("article");
const reference = document.getElementById("reference");
articulo.append(txt2);
articulo.setAttribute("class", "artuculo");
section.appendChild(articulo); //insertar al final
section.prepend(articulo); //insertar al principio

section.insertBefore(articulo, reference); //insertar antes de

const artCopia = articulo.cloneNode(true);
console.log(artCopia);

section.replaceChild(articulo, reference); //reemplaza elementos
section.removeChild(articulo);
