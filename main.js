addEventListener("DOMContentLoaded",()=>{
let A=0,B=0,C=0,D=0
A=Number(prompt("Ingrese la nota del primer examen: ",3))
B=Number(prompt("Ingrese la nota del segundo examen: ",3))
C=Number(prompt("Ingrese la nota del tercer examen: ",3))
D=Number(prompt("Ingrese la nota del cuarto examen: ",3))

let prom=(A+B+C+D)/4
if(prom>=5){
    alert("Aprobado")

}else{
    alert("Reprobado")
}



})