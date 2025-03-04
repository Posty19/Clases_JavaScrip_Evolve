//*******************************************Creacion de nuevos elementos
document.getElementById('btnCrear').addEventListener('click',e=>{
    //cantidad de parrafos para numerar el elemento
    const pLength = document.querySelectorAll('#contenedorNuevos p.elemento').length;
    //creacion del nodo texto
    const textCreation = document.createTextNode(`Elemento creado con numero: ${pLength+1}`);
    //creacion del parrafo
    const pElement = document.createElement('p');
    //asignacion de la clase elemento
    pElement.setAttribute('class', 'elemento');
    //añadir el texto al parrafo
    pElement.append(textCreation);
    //añadir el parrafo al contenedor
    document.getElementById('contenedorNuevos').appendChild(pElement);
})

//*******************************************Sección de inserción posicional

// insertar antes
document.getElementById('btnInsertarAntes').addEventListener('click',e=>{
    //tomar el elemento referencia
    const reference=document.getElementById('elementoReferencia')
    //creacion del nodo texto
    const textCreation = document.createTextNode(`Elemento creado antes del elemento de referencia`);
    //creacion del parrafo
    const pElement = document.createElement('p');
    //asignacion de la clase elemento
    pElement.setAttribute('class', 'elemento');
    //añadir el texto al parrafo
    pElement.append(textCreation);
    //añadir el parrafo al contenedor
    document.getElementById('contenedorInserciones').insertBefore(pElement,reference);
})

// insertar despues
document.getElementById('btnInsertarDespues').addEventListener('click',e=>{
    //tomar el elemento referencia
    const reference=document.getElementById('elementoReferencia')
    //creacion del nodo texto
    const textCreation = document.createTextNode(`Elemento creado despues del elemento de referencia`);
    //creacion del parrafo
    const pElement = document.createElement('p');
    //asignacion de la clase elemento
    pElement.setAttribute('class', 'elemento');
    //añadir el texto al parrafo
    pElement.append(textCreation);
    //añadir el parrafo al contenedor
    reference.insertAdjacentElement('afterend',pElement);
})

//insertar al inicio
document.getElementById('btnInsertarInicio').addEventListener('click',e=>{
    //creacion del nodo texto
    const textCreation = document.createTextNode(`Elemento creado al inicio`);
    //creacion del parrafo
    const pElement = document.createElement('p');
    //asignacion de la clase elemento
    pElement.setAttribute('class', 'elemento');
    //añadir el texto al parrafo
    pElement.append(textCreation);
    //añadir el parrafo al contenedor
    document.getElementById('contenedorInserciones').prepend(pElement);
})

//insertar al final
document.getElementById('btnInsertarFinal').addEventListener('click',e=>{
    //creacion del nodo texto
    const textCreation = document.createTextNode(`Elemento creado al final`);
    //creacion del parrafo
    const pElement = document.createElement('p');
    //asignacion de la clase elemento
    pElement.setAttribute('class', 'elemento');
    //añadir el texto al parrafo
    pElement.append(textCreation);
    //añadir el parrafo al contenedor
    document.getElementById('contenedorInserciones').append(pElement);
})

//*******************************************Eliminacion de elementos

document.getElementById('btnEliminar').addEventListener('click',e=>{
    document.getElementById('contenedorEliminables').lastElementChild.remove()
})

//*******************************************Reemplazar elemento

document.getElementById('btnEliminar').addEventListener('click',e=>{
    document.getElementById('contenedorEliminables').lastElementChild.remove()
})