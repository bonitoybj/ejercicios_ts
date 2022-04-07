"use strict";
//Ejercicios
//1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert("Hello Word!!");

//2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write("Hello Word \n \n;");

//3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.getElementById("ej3").innerHTML = 3 + 5 ;

//4 Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
var nombre = prompt("insgrese su nombre");
document.getElementById("ej4").innerHTML = "Hola " + nombre;

//5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
var num1 = prompt("ingrese un numero");
var num2 = prompt("ingrese otro numero");
var res = parseInt(num1) + parseInt(num2);
document.getElementById("ej5").innerHTML = "la suma es: " + res;

//6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
var nu1 = prompt("ingrese un numero");
var nu2 = prompt("ingrese otro numero");
if (parseInt(nu1) > parseInt(nu2)) {
    document.getElementById("ej6").innerHTML = nu1;
}
else {
    document.getElementById("ej6").innerHTML = nu2 ;
}

//7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
var n1 = prompt("ej7: ingrese un numero");
var n2 = prompt("ej7: ingrese otro numero");
var n3 = prompt("ej7: ingrese otro numero");
if(n1>n2 & n1>n3){
    document.getElementById("ej7").innerHTML = n1;
}
else if (n2>n3){
    document.getElementById("ej7").innerHTML = n2 ;
}
else{
    document.getElementById("ej7").innerHTML = n3;
}

//8 Escribe un programa que pida un número y diga si es divisible por 2
var n1 = prompt("ingrese un numero");
if(n1%2 ===0){
    document.getElementById("ej8").innerHTML = n1 + " es divisible por 2";
}
else{
    document.getElementById("ej8").innerHTML = n1 + " no es divisible por 2";
}

//9 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
var frase = prompt("ingrese una frase");
var indice = [];
for(var i=0; i<frase.length; i++){
    if(frase[i].toLowerCase()==="a") indice.push(i);
}
document.getElementById("ej9").innerHTML = "la frase: " + frase + " tiene " + indice.length + " 'a'";

//10 Escribe un programa que pida una frase y escriba las vocales que aparecen
var frase1 = prompt("ingrese una frase");