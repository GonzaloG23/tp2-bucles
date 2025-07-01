// let suma = 0;
// while (true){
// let entrada = prompt("Ingrese un numero:");
// if (entrada === null) {
//     break; 
//   }
// let numero = parseFloat(entrada);
// if (isNaN(numero)) {
//     alert("Eso no es un número válido");
//   } else {
//     suma += numero;
// }}

// alert("La suma total es: " + suma);

// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos

let suma = 0;
let entrada = parseInt(prompt("Ingrese un numero para sumar, presiona cancelar para salir"));

while(entrada !==null){
let numero = parseInt(entrada);

if(isNaN(numero)){
  alert("el valor ingresado no es un numero, intente nuevamente")
}else
suma += numero

entrada = prompt("Ingrese otro número para sumar. Presiona cancelar para salir:");
}

alert("La suma de los números es: " + suma);
