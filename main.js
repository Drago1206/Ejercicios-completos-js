addEventListener("DOMContentLoaded",()=>{
let Hr=0,Pg=0
Hr=Number(prompt("Ingrese las horas laboradas: "))
Pg=Number(prompt("Ingrese su sueldo"))

if(Hr>48){
    extras=Hr-48
    let sueldo=(48*Pg)
    let extra=sueldo+(Hr*(Pg+Pg*0.5))
    console.log(`El sueldo por 48 horas es de: ${Pg}`)
    console.log(`Las horas extras trabajadas son de${Hr}`)
    console.log(`El sueldo con la horas extras es de: ${extras}`)
    console.log(`El sueldo es de: ${sueldo}`)
}else{
    let Sueldo=Hr*Pg
    console.log("El sueldo por ",Hr,"es de: ",Sueldo)
}

})