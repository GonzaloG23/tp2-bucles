// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
// si tecleo “hola que tal” deberá mostrar “lat euq aloh”

let texto = prompt("Ingrese una cadena de texto");
let invertido = "";

let i = texto.length - 1;

while (i >= 0) {
  invertido += texto.charAt(i);
  i--;
}

document.writeln( invertido);


// 🟢 1. let texto = prompt("Ingrese una cadena de texto");
// Se le pide al usuario que escriba una frase.

// Lo que el usuario escriba se guarda en la variable texto.

// 🟢 2. let invertido = "";
// Creamos una variable vacía para guardar el texto al revés.

// Al principio está vacía, y luego iremos agregando letras una por una desde el final.

// 🟢 3. let i = texto.length - 1;
// Esto calcula la posición del último carácter de la frase.

// Por ejemplo, "Hola mundo" tiene 10 caracteres (índices del 0 al 9).
// Entonces:

// i = 9
// Usaremos i para recorrer la frase desde el final hacia el principio.

// 🔁 4. while (i >= 0) {
// Este es un bucle que se repite mientras i sea mayor o igual a 0.

// Es decir, mientras haya letras para leer al revés.

// 🟢 5. invertido += texto.charAt(i);
// texto.charAt(i) obtiene el carácter en la posición i.

// Lo agregamos a la variable invertido.

// 🔁 6. i--;
// Se resta 1 a i en cada vuelta para seguir hacia atrás.

// 🟢 7. document.writeln("La frase invertida es: " + invertido);
// Cuando el bucle termina, se muestra el resultado en la página.