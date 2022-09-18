addEventListener("DOMContentLoaded",()=>{
let A=0,B=0,C=0,Sueldo=0
A=Number(prompt("Ingresa la primera venta: "))
B=Number(prompt("Ingresa la segunda venta: "))
C=Number(prompt("Ingresa la tercera venta: "))
Sueldo=Number(prompt("Ingresa el sueldo"))

let comision=(A+B+C)*0.10
let total=(Sueldo+comision)

console.log(`El sueldo del trabajador es de:  ${Sueldo}`)
console.log(`La comision del mes por las tres ventas es de:  ${comision}`)
console.log(`El sueldo ${total}`)
})