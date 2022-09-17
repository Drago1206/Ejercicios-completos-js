addEventListener("DOMContentLoaded",()=>{
let p1=0,p2=0,p3=0
p1=Number(prompt("Ingrese el valor del producto"))
p2=Number(prompt("Ingrese el valor del producto"))
p3=Number(prompt("Ingrese el valor del producto"))

let sub=0,iva=0,Tl=0
sub=(p1+p2+p3)
iva=(sub*0.19)
Tl=(sub+iva)
console.log(`El subtotal es de: ${sub}`)
console.log(`El valor con el iva  es de: ${iva}`)
console.log(`El valor total es de: ${Tl}`)


})