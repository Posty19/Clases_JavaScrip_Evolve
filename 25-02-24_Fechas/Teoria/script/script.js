const date = new Date();

console.log(date);

//metodos de extraccion en fechas
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

//metodos de setear en fechas
console.log(date.setFullYear(2026));
console.log(date.setMonth(5));
console.log(date.setDate(15));
console.log(date.setHours(10));
console.log(date.setMinutes(50));
console.log(date.setSeconds(12));
console.log(date.setMilliseconds(3));

//Moment

console.log('******************************* Moment *******************************');
const moment = require('moment')

const date2 = moment([2025,1,24]);
const date3 = moment();

console.log(date2);
console.log(date2.format('YYYY-MM-DD'));
console.log(date3.format('DD-MM-YYYY'));

date2.add(7,'days')
console.log(date2.format('YYYY-MM-DD'));

date2.subtract(1,'month')
console.log(date2.format('YYYY-MM-DD'));

date3.set('month',5);
console.log(date3.format('YYYY-MM-DD'));

console.log(date2.isAfter(date3));
console.log(date2.isBefore(date3));
console.log(date2.isSame(date3));

console.log(date2.diff(date3,'day'));