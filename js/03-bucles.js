let resultado = "";
let ingreso = prompt("Introduce una cadena de texto (pulsa Cancelar para salir):");

while (ingreso !== null) {
  // Si resultado ya tiene contenido, añadimos un guión antes de concatenar
  if (resultado !== "") {
    resultado += " - ";
  }
  //añadimos lo ingresado a resultado
  resultado += ingreso;
  ingreso = prompt("Introduce otra cadena de texto (pulsa Cancelar para salir):");
}

if (resultado !== "") {
  alert("Cadenas concatenadas: " + resultado);
} else {
  alert("No se introdujeron cadenas.");
}