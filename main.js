addEventListener("DOMContentLoaded",()=>{
let c1=0,c2=0,c3=0
c1=Number(prompt("Ingrese la primera calificacion: "))
c2=Number(prompt("Ingrese la segunda calificacion: "))
c3=Number(prompt("Ingrese la tercera calificacion: "))
let prom=0,exam=0,Trabajo=0
prom=(c1+c2+c3)/3
exam=Number(prompt("Ingrese la nota del examen: "))
Trabajo=Number(prompt("Ingrese la calificacion del trabajo final: "))

let final=0
final=(prom+exam+Trabajo)

console.log(`El promedio final de la materia del algoritmos es de: ${final}`)



})