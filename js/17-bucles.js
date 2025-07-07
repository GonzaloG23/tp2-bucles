// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Pedir texto al usuario
let textoUsuario = prompt("Introduce un texto:");
let vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
let posicion = -1;

// Recorrer el texto para encontrar la primera vocal
for (let i = 0; i < textoUsuario.length; i++) {
    if (vocales.includes(textoUsuario[i])) {
        posicion = i;
        break; // Salir del bucle al encontrar la primera vocal
    }
}

// Mostrar el resultado
if (posicion !== -1) {
    document.writeln("La primera vocal está en la posición " + posicion + ".");
} else {
    document.writeln("No se encontró ninguna vocal en el texto.");
}