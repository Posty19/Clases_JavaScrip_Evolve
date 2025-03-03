/**1. Mostrar un mensaje con el evento click en un botón 🖱️

Enunciado: Crea un botón en tu página HTML. Utiliza el evento click para que, cuando el usuario haga clic sobre el botón, se muestre un mensaje en una ventana de alert con un texto personalizado como "¡Botón presionado!". */

document.getElementById('ej1').addEventListener('click',e=>{
    alert('boton personalizado');
})

/**2. Cambiar la imagen con el evento dblclick 🖼️

Enunciado: Inserta una imagen en la página. Utiliza el evento dblclick para cambiar la imagen cuando el usuario haga doble clic sobre ella. Puedes cambiar la imagen a otra diferente al hacer doble clic. */

document.getElementById('ej2').addEventListener('dblclick',e=>{
    const src = e.target.getAttribute('src');
    src === 'img/hobbit.jpg'? e.target.setAttribute('src','img/orks_736.jpg'):e.target.setAttribute('src','img/hobbit.jpg')
})

/**3. Detectar el movimiento del ratón con mousemove 🐭

Enunciado: Crea un área en tu página web. Usa el evento mousemove para ejecutar una acción cada vez que el ratón se mueva dentro de esa área. Por ejemplo, puedes mostrar un mensaje de alert cada vez que se mueva el ratón. */

document.getElementById('ej3').addEventListener('mousemove',e=>{
    e.target.append(`el raton se esta moviendo`) ;
})

/**4. Cambiar el color de fondo con mousedown y mouseup 🖱️

Enunciado: Crea un botón en la página. Utiliza los eventos mousedown y mouseup para cambiar el color de fondo del botón cuando el usuario presione y suelte el botón del ratón. Puedes asignar colores diferentes para cada acción. */

document.getElementById('ej4').addEventListener('mousedown',e=>{
    e.target.style.backgroundColor = '#0000ff'
    
})
document.getElementById('ej4').addEventListener('mouseup',e=>{
    e.target.style.backgroundColor = '#ff0000'
    console.log('ej4');
})

/**5. Contar caracteres con el evento input en un campo de texto ⌨️

Enunciado: Crea un campo de texto en el HTML. Utiliza el evento input para mostrar en tiempo real la cantidad de caracteres que el usuario ha escrito en el campo. Este contador debe actualizarse a medida que el texto se modifica. */

document.getElementById('ej5').addEventListener('keydown',e=>{
    document.getElementById('ej5span').textContent=document.getElementById('ej5').value.length
})

/** 6. Mostrar un valor seleccionado con el evento change en un selector <select> 📜

Enunciado: Crea un menú desplegable con varias opciones. Usa el evento change para mostrar un mensaje que indique el valor de la opción seleccionada cada vez que el usuario cambie la selección.*/

document.getElementById('ej6').addEventListener('change',e=>{
    document.getElementById('ej6span').textContent=document.getElementById('ej6').value
})


/**7. Cambiar el borde de un campo con focus y blur 🔲

Enunciado: Crea un campo de texto en la página. Utiliza los eventos focus y blur. Cuando el campo reciba el foco (focus), cambia el borde a verde. Cuando pierda el foco (blur), cambia el borde a rojo. */

document.getElementById('ej7Imput').addEventListener('focus',e=>{
    e.target.style.border = '5px solid green'
})
document.getElementById('ej7Imput').addEventListener('blur',e=>{
    e.target.style.border = '1px solid red'
})

/**8. Mostrar el tamaño de la ventana con el evento resize 🌐

Enunciado: Utiliza el evento resize para detectar cambios en el tamaño de la ventana del navegador. Cada vez que el usuario cambie el tamaño de la ventana, muestra un mensaje con las nuevas dimensiones. */

window.addEventListener('resize',e=>{
    document.getElementById('ej8Result').textContent = `${window.innerWidth}px * ${window.innerHeight}px`
})

/**9. Mostrar un mensaje al desplazar la página con scroll ⬇️

Enunciado: Crea una página con mucho contenido. Usa el evento scroll para mostrar un mensaje cada vez que el usuario empuje la barra de desplazamiento de la página hacia abajo. Puedes mostrar un simple mensaje como "Desplazamiento detectado". */

window.addEventListener('scroll',e=>{
    document.getElementById('ej9Result').textContent = "Desplazamiento detectado"
})

/**10. Manejo de múltiples botones con addEventListener 🔘

Enunciado: Crea varios botones en tu página. Utiliza addEventListener para asignar el evento click a cada uno de ellos. Cada vez que el usuario haga clic en un botón, muestra un mensaje de alert indicando el nombre del botón presionado (por ejemplo, "Botón 1", "Botón 2", etc.). */

const btns = document.querySelectorAll('input[type="button"]');

btns.forEach(btn => {
    btn.addEventListener('click', e=>{
        document.getElementById('ej10Result').textContent = e.target.name;
    })
});

/**11. Múltiples eventos en un div con addEventListener 🎨

Enunciado: Crea un div en la página y usa el evento mouseenter para cambiar el color de fondo a verde cuando el ratón entre en el área del div, y usa el evento mouseleave para devolver el color de fondo a su estado original cuando el ratón salga del área. */

document.getElementById('ej11').addEventListener('mouseenter',e=>{
    e.target.style.backgroundColor='green';
})
document.getElementById('ej11').addEventListener('mouseleave',e=>{
    e.target.style.backgroundColor='#fff';
})

/**12. Detectar teclas presionadas con keydown y keyup ⌨️

Enunciado: Crea un campo de texto en tu página. Usa los eventos keydown y keyup para mostrar un mensaje de alert cada vez que el usuario presione o suelte una tecla en el campo de texto. */

document.getElementById('ej12Imput').addEventListener('keydown',e=>{
    document.getElementById('ej12span').textContent = 'Tecla presionada';
})
document.getElementById('ej12Imput').addEventListener('keyup',e=>{
    document.getElementById('ej12span').textContent = 'Tecla soltada';
})

/**13. Cambiar el color de fondo de un elemento con mouseover y mouseout 🖱️

Enunciado: Crea un div y usa los eventos mouseover y mouseout para cambiar el color de fondo del div cuando el ratón entre o salga de él. El fondo puede cambiar a un color específico al pasar el ratón y volver al color original al quitarlo. */

//      ********************** no es igula que el 11?

/**14. Evitar que un formulario se envíe con submit 📝

Enunciado: Crea un formulario con un campo de texto y un botón de envío. Usa el evento submit para evitar que el formulario se envíe si el campo de texto está vacío, mostrando un mensaje que indique que el campo es obligatorio. */

document.getElementById('ej14form').addEventListener('submit',e=>{
    e.preventDefault();
    const imputText = document.getElementById('ej14Imput').value;

    if (imputText!==''){   
        document.getElementById('ej14form').submit()
    }else{
        document.getElementById('ej14span').textContent = 'El campo no puede quedar vacio'
        
    }

})

/**15. Deshabilitar un botón con el evento input en un campo de texto ⬇️

Enunciado: Crea un campo de texto y un botón en la página. Usa el evento input para deshabilitar el botón si el campo de texto está vacío, y habilitarlo si el campo contiene texto. Esto evita que el usuario haga clic en el botón cuando el campo está vacío. */

document.getElementById('ej15Imput').addEventListener('input',e=>{
    document.getElementById('ej15submit').disabled=true;
})
document.getElementById('ej15Imput').addEventListener('blur',e=>{
    document.getElementById('ej15submit').disabled=false;
})