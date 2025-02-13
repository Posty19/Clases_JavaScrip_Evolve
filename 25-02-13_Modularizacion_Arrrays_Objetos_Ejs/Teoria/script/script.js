import calculadora from 'calculadora.js';

const n1 = 10;
const n2 = 5;

console.log(calculadora.suma(n1,n2));
console.log(calculadora.resta(n1,n2));
console.log(calculadora.multiplicar(n1,n2));
console.log(calculadora.dividir(n1,n2));

//DESTRUCTURIN
const coche = {
    color:'rojo',
    modelo:'mustang',
    marca:'ford',
    anno:1969
}

const {color:colorCoche,modelo:modeloCoche} = coche;

console.log(colorCoche);
console.log(modeloCoche);

const nums = [3,6,5,4,3,1];

const [prim, , terc] = nums;

console.log(prim);
console.log(terc);

const [ , , ...resto] = nums;

console.log(resto);