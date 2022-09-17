addEventListener("DOMContentLoaded",()=>{
    let min=0, iva=0
    min=Number(prompt("Ingrese los minutos que la llamada ha durado: "))

    iva=(min/100)
    let cost=(min*iva)
    console.log(`EL VALOR DE LA LLAMADA ES DE: ${cost}`)

})