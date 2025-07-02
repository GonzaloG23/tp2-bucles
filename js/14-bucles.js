// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
// – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
// tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”

let texto = prompt("Ingrese una cadena de texto:");
    let resultado = "";
    let i = 0;

    while (i < texto.length) {
      resultado += texto.charAt(i);
      if (i !== texto.length - 1) {
        resultado += "-";
      }
      i++;
    }

    document.writeln(resultado);

//     1. let texto = prompt("Ingrese una cadena de texto:");
// Se le pide al usuario que escriba una cadena (por ejemplo: "hola qué tal").

// Esa cadena se guarda en la variable texto.

// ✅ 2. let resultado = "";
// Se crea una variable vacía llamada resultado.

// En ella iremos construyendo el nuevo texto, con los guiones entre los caracteres.

// ✅ 3. let i = 0;
// Creamos un contador i para recorrer la cadena.

// Comenzamos en la posición 0, que es el primer carácter.

// ✅ 4. while (i < texto.length)
// Este bucle repite el proceso mientras i sea menor que la longitud de la cadena.

// Es decir, se ejecuta una vez por cada carácter de texto.

// ✅ 5. resultado += texto.charAt(i);
// Agregamos el carácter actual (posición i) a la variable resultado.

// charAt(i) es una forma segura de acceder al carácter sin usar arrays ni corchetes.

// ✅ 6. if (i !== texto.length - 1) { resultado += "-"; }
// Si NO es el último carácter, agregamos un -.

// Esto evita que el resultado termine con un guion al final, lo cual sería incorrecto.

// ✅ 7. i++;
// Aumentamos i en 1 para pasar al siguiente carácter.

// ✅ 8. document.writeln(resultado);
// Una vez terminado el bucle, mostramos el resultado en pantalla.