//Ejercicio 1 conteo de pares

for(let i=1;i<51;i++){
  i%2 === 0 ? console.log(i) : null;
}

//ejercico 2 de1 a5 co while

let i = 0;
while (i<5){
  console.log(++i);
}

//Ejercicio 3: Clasificador de Edades

const calcularEdad = (edad)=>{
  if(edad <=0 ){
  console.log('la edad no es valida');
}else if(edad > 0 && edad < 13){
  console.log('Eres un niño.');
}else if(edad > 12 && edad < 20){
  console.log('Eres un adolescente.');
}else if(edad > 19 && edad < 65){
  console.log('Eres un adulto.');
}else if(edad > 64){
  console.log('Eres un adulto mayor.');
}else{
  console.log('La edad ha de ser un numero');
}
}
calcularEdad(5);
calcularEdad(15);
calcularEdad(30);
calcularEdad(70);

//Ejercicio 4: Tabla de Multiplicar (Bucle Anidado for)

for(let i=1; i<11;i++){
  console.log(`Tabla de multiplicar de ${i}`);
  for(let j=1;j<11;j++){
    console.log(`${i} x ${j} = ${i*j}`);
  }
  console.log('');
}

//Ejercicio 5: cuenta regresiva
for(let i=10; i>-1;i--){
  i === 0 ? console.log('Despegue'):console.log(i);
}

//Ejercicio 6: Suma de Números del 1 al N

const sumatorio = (num) => {
  let sumatorio=0;
  let i = 0;

  while(i<num+1){
    sumatorio +=i;
    i++;
  }
  console.log(`el sumatorio de ${num} es: ${sumatorio}`);
}
sumatorio(5);
sumatorio(10);
sumatorio(100);

//Ejercicio 7: Números Divisibles por 3 (hasta 30)

for(let i=1;i<31;i++){
  i%3 === 0 ? console.log(`${i} es divisible entre tres`) : ''
}
