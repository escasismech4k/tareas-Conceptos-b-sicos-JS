let nombre 
let horastrabajadas = 0;
let valorHora = 0;
let sueldo = 0;

nombre = prompt('indique el nombre del trabajador');

horastrabajadas = prompt(nombre + (' cuantas horas ha trabajado el dia de hoy?'))

valorHora = Number(prompt('a cuanto equivale sueldo por hora?'));

sueldo = valorHora * horastrabajadas

alert('el sueldo de ' + nombre + ' es de ' + sueldo + ' pesos');