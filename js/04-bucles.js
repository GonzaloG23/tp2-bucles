let suma = 0;
while (true){
let entrada = prompt("Ingrese un numero:");
if (entrada === null) {
    break; 
  }
let numero = parseFloat(entrada);
if (isNaN(numero)) {
    alert("Eso no es un número válido");
  } else {
    suma += numero;
}}

alert("La suma total es: " + suma);



