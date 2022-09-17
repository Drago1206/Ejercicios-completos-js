addEventListener("DOMContentLoaded",()=>{
    let a=0,b=0,c=0
    a=Number(prompt("Ingresa el primer valor: ",4))
    b=Number(prompt("Ingrese el segundo el valor: ",2))
    c=Number(prompt("Ingresa el tercer valor:  ",5))
    let exp1=0,exp2=0,exp3=0
    exp1=(a+7*c)/((b+2-a)+2*b)
    console.log(`el valor de la primera expresion es: ${exp1}`)
})