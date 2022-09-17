addEventListener("DOMContentLoaded",()=>{
    let km=0, min=0, vp=0
    km=Number(prompt("Ingresa los kilometros que recorrio el proyectil"));
    min=Number(prompt("Ingresa los minutos: "));
    vp=(km/min)
    console.log(`La velocidad del proyectil es de: ${vp}`)

})