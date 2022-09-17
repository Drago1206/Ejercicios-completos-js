addEventListener("DOMContentLoaded",()=>{
    let n1=0 , n2=0 , n3=0
    n1=Number(prompt("Ingrese el primer numero:  ",3));
    n2=Number(prompt("Ingrese el segundo numero:  ",4));
    n3=Number(prompt("Ingrese el tercer numero: ",5));
    console.log(`La suma es de ${n1} + ${n2} + ${n3} = ${n1+n2+n3}`);
    console.log(`La resta es de ${n1} - ${n2} - ${n3} =${n1-n2-n3}`);
    console.log(`La multiplicacion es ${n1} * ${n2} * ${n3} = ${n1*n2*n3}`);
    console.log(`La division es de ${n1} / ${n2} / ${n3} = ${n1/n2/n3}`);
})