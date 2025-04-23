// Realiza un script que pida un texto y lo muestre en mayúsculas

let texto = prompt("Ingrese un texto en minisculas");
while(texto ===""){ 
    alert("No se introdujo texto valido")
        texto = prompt("Ingrese un texto valido en minusculas");}

        if (texto ===null){
alert("Se cancela la operacion")
    }else{
 document.writeln("El texto es:"+ texto.toUpperCase());}
