addEventListener("DOMContentLoaded",()=>{
    let n1=0,  n2=0, n3=0, n4=0, r=0
    n1=Number(prompt("Ingrese el numero para saber su media",3));
    n2=Number(prompt("Ingrese el numero para saber su media",4));
    n3=Number(prompt("Ingrese el numero para saber su media",5));
    n4=Number(prompt("Ingrese el numero para saber su media",7));
    r=(n1+n2+n3+n4)/4;
    console.log(`La media es de: "${r}" `);
})