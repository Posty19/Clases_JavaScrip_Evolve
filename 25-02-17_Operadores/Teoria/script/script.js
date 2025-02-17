// Operadores + - * / % ** ++ --

const suma = 10 + 5;
const resta = 10 - 5;
const multiplicar = 10 * 5;
const dividir = 10 / 5;
const modulo = 10 % 5;
const exponente = 10 ** 5; // 10^5
const incremento = 2++; // ++2
const decremento = 2--; // --2

// Asignación = += -= *= /= %= **=

const asignacion = 2; // =
asignacion += 2;
asignacion -= 2;
asignacion *= 2;
asignacion /= 2;
asignacion %= 2;
asignacion **= 2;

// Comparación === == !== != > < <= >=

const comparacionEstricta = 2 === 2;
const comparacion = 2 == 2;
const diferenteEstricto = 2 !== '2'; //false
const diferente = 2 != '2'; //true
const mayor = 2 > 1;
const menor = 2 < 4;
const mayorIgual= 2 >= 1;
const menorIgual= 2 <= 4;

//logicos && || !

 if (3>4&&4<4){
  console.log('resultado true de la comparación');
 }

 if (3>4||4<4){
  console.log('resultado true de la comparación');
 }
 if (3>4&&4<4 || 0>2&&5<9){
  console.log('resultado true de la comparación');
 }

 if(!(5<0)){
  console.log('resultado true de la comparación');
 }

 // operadores de tipo

 const typeOf = typeof 'string';
 const instance = 2 instanceof Number; //comprueba si el valor es una instancia de una clase

//operador ternario evaluacion ? positivo:negativo;
const valor = true;
const verdaero = valor ? 'valor positivo':'valor negativo';

//operadores opcionales (Nullish Coalescending)

const mayorEdad  = true;

const autorizacion = mayorEdad ?? 'no es mayor de edad'; // completa null o undefined
asignacion = mayorEdad || 'no es mayor de edad'; // completa solo true o false

const persona ={
  nombre : 'Ana',
  edad: 22,
  hermano:{
    nombre : 'Juan',
    edad: 22,
  }
}

const edadHermano = persona.hermano.edad;
const edadHermana = persona.hermana?.edad; // error undefined
edadHermana = persona.hermana?.edad;  // ? comprueba si la propiedad existe y evita errores