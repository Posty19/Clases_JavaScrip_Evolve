const {
    mostrarAlumnos,
    agregarAlumnos,
    mediaNotas,
    alumnosAprobados
}= require('./registro.js');


agregarAlumnos('Daniel',[6,5,9,4,8,3,7]);
agregarAlumnos('Paco',[2,10,9,8,6,7]);
agregarAlumnos('Lucia',[5,1,9,3,5]);
agregarAlumnos('Andrea',[8,3,7]);

console.log(mostrarAlumnos());

console.log(mediaNotas());

console.log(alumnosAprobados());