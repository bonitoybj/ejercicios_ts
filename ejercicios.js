"use strict";
//Ejercicios
//1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert("Hello Word!!");

//2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write("Hello Word \n \n;");

//3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3 + 5 + "\n \n;");

//4Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
var nombre = prompt("insgrese su nombre");
document.write("Hola " + nombre + "\n \n;");

//5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
var num1 = prompt("ingrese un numero");
var num2 = prompt("ingrese otro numero");
document.write("la suma es: " + (parseInt(num1) + parseInt(num2)) + "\n \n;");

//6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
var nu1 = prompt("ingrese un numero");
var nu2 = prompt("ingrese otro numero");
if (parseInt(nu1) > parseInt(nu2)) {
    document.write(nu1 + "\n \n;");
}
else {
    document.write(nu2 + "\n \n;");
}

//7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
var n1 = prompt("ingrese un numero");
var n2 = prompt("ingrese otro numero");
var n3 = prompt("ingrese otro numero");
if(n1>n2 & n1>n3){
    document.write(n1 + "\n \n;");
}
else if (n2>n3){
    document.write(n2 + "\n \n;");
}
else{
    document.write(n3 + "\n \n;");
}

//8 Escribe un programa que pida un número y diga si es divisible por 2
var n1 = prompt("ingrese un numero");
if(n1%2 ===0){
    document.write("es divisible por 2" + "\n \n;");
}
else{
    document.write("no es divisible por 2" + "\n \n;")
}

//9 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a