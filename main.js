addEventListener("DOMContentLoaded",()=>{
    let Dkm=0, Tseg=0, Dmt=0, Thr=0
    Dkm=Number(prompt("Ingrese la distancia recorrida por el automovil: "))
    Tseg=Number(prompt("Ingrese el tiempo que gasto en dicho recorrido: "))
    Dmt=(1000*Dkm)
    Thr=(Tseg/3600)
    let VMtS =(Dmt/Tseg)
    let VkmHr=(Dkm/Thr)
    console.log(`LA VELOCIDAD EN METROS POR SEGUNDO ES DE: ${VMtS}`)
    console.log(`LA VELOCIDAD DE KILOMETROS POR HORA ES DE: ${VkmHr}`)


})