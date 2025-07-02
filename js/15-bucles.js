// Realiza un script que cuente el número de vocales que tiene un texto

let texto = prompt("Ingrese un texto");
let vocales = 0;
let i = 0;

for (i = 0; i < texto.length; i++) {
  let caracter = texto.charAt(i).toLowerCase(); // para que cuente mayúsculas también

  if (
    caracter == "a" ||
    caracter == "e" ||
    caracter == "i" ||
    caracter == "o" ||
    caracter == "u"
  ) {
    vocales++;
  }
}

document.writeln("El numero de vocales es:" + vocales);

// 1️⃣ let texto = prompt("Ingrese un texto");
// Muestra una ventana emergente para que el usuario escriba algo.

// Lo que el usuario escriba se guarda en la variable texto.

// Ejemplo: si el usuario escribe Hola mundo, entonces

// javascript
// Copiar
// Editar
// texto = "Hola mundo"
// 2️⃣ let cantidadVocales = 0;
// Creamos una variable llamada cantidadVocales.

// La iniciamos en 0 porque aún no contamos ninguna vocal.

// 3️⃣ let i = 0;
// Variable que usaremos como contador para recorrer cada carácter del texto, de uno en uno.

// 4️⃣ for (i = 0; i < texto.length; i++) {
// Esta es una estructura de bucle que:

// Comienza en i = 0 (primer carácter).

// Se repite mientras i sea menor que la cantidad de caracteres de texto (texto.length).

// En cada vuelta, suma 1 a i con i++.

// Ejemplo: Si el texto es "Hola", el bucle hará 4 vueltas:

// i = 0 (H)

// i = 1 (o)

// i = 2 (l)

// i = 3 (a)

// 5️⃣ let caracter = texto.charAt(i).toLowerCase();
// texto.charAt(i) obtiene el carácter en la posición i.

// .toLowerCase() convierte ese carácter a minúscula, para que no importe si el usuario puso "A" o "a".

// Ejemplo: Si texto = "Hola", y i = 0, entonces:
// texto.charAt(0) → "H"
// "H".toLowerCase() → "h"
// caracter = "h"

// 6️⃣ if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u")
// Esta condición comprueba si caracter es una vocal.

// Usa || (o lógico) para verificar si es cualquiera de estas cinco letras.

// Ejemplo: Si caracter = "a", entra en el if.

// 7️⃣ cantidadVocales++;
// Si el carácter es vocal, aumenta en 1 el contador cantidadVocales.

// 8️⃣ Fin del for — Ya revisamos todos los caracteres.
// 9️⃣ document.writeln("El número de vocales es: " + cantidadVocales);
// Muestra en pantalla el resultado final.