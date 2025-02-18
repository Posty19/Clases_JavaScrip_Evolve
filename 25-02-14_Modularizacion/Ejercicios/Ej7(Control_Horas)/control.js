const empleados = [];

const mostrarEmpleados = () => console.log(empleados);
//✅ Agregar empleados con su total de horas trabajadas.

const addEmpleado = (nombre, horas) => empleados.push({nombre, horas});

//✅ Calcular la suma total de horas.

const sumaHoras = () => {
  let totalHoras = 0;
  empleados.forEach((el) => {
    totalHoras += el.horas;
  });
  return totalHoras;
};

//✅ Filtrar empleados que trabajaron más de 40 horas (filter).

const filtrarHoras = () => empleados.filter((el) => el.horas > 40);

//✅ Ordenar empleados por horas trabajadas (sort).

const ordenarHoras = () => empleados.sort((a, b) => b.horas - a.horas);

module.exports = {
  mostrarEmpleados,
  addEmpleado,
  sumaHoras,
  filtrarHoras,
  ordenarHoras,
};
