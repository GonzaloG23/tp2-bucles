//let resultado = "";
//let ingreso = prompt("Introduce una cadena de texto (pulsa Cancelar para salir):");

//while (ingreso !== null) {
// Si resultado ya tiene contenido, añadimos un guión antes de concatenar
// if (resultado !== "") {
//   resultado += " - ";
//}
//añadimos lo ingresado a resultado
// resultado += ingreso;
// ingreso = prompt("Introduce otra cadena de texto (pulsa Cancelar para salir):");
//}

//if (resultado !== "") {
// alert("Cadenas concatenadas: " + resultado);
//} else {
// alert("No se introdujeron cadenas.");
//}

//Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con“cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let resultado = "";
let texto = prompt("Ingrese una cadena de texto, pulse cancelar para salir");

while (texto !== null) {
  if (resultado !== "") {
    resultado += " - ";
  }
  resultado += texto;
  texto = prompt("Ingrese otra cadena de texto, pulse cancelar para salir");
  }
  if (resultado !== "") {
    alert("las cadenas son: " + resultado);
  } else {
    alert("no hay cadenas concatenadas");
  }



