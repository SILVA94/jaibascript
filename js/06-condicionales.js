'use strict'

//Condicional IF
// Si A es igual a B entonces haz algo

var edad = 71;
var nombre = 'David Suarez';
/* operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: =

*/

if (edad >= 18){
    console.log(nombre+" tiene " +edad+" a;os, es mayor de edad")
    if(edad == 33){
        console.log('Todavia eres milenial')
    }else if(edad >= 70){
        console.log('Eres anciano')
    } else{
        console.log('Ya no eres milenial')
    }
} else{
    console.log(nombre+" tiene " +edad+" a;os, es menor de edad")
}

/*
 Operadores logicos
 AND(Y): &&
 OR(O) ||
 Negacion: !
 */

 var year = 2008

//NEGACION
 if(year != 2016){
    console.log("El a;o no es 2016, realmente es: "+year)
 }

 //AND

 if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual")
 } else{
    console.log("Estamos en la era post moderna")
 }

 //OR

 if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El a;o acaba en 8")
 }else{
    console.log("A:O NO REGISTRADO")
 }

