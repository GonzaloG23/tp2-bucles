const nota = prompt("Ingrese una nota de 0 a 10");
if (nota <= 2) {
    alert("Muy deficiente")
} 
else if (nota >= 3 && nota <= 4 ) {
    alert ("insuficiente")
} 
else if (nota >= 5 && nota <= 6){
    alert("Suficiente")
}
else if (nota==7){
    alert("Bien")
}
else if(nota >=8 && nota <=9){
    alert("Notable")
}
else if (nota==10) {
    alert ("Sobresaliente")
}
else if (nota>10){
    alert("Numero erroneo")
} 
else if (nota !=Number)
{
    alert("Introduce un numero valido")
}