function verificar(){
    var txtv = document.getElementById('number') 
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade é de ${vel}km/h. <br>`
    if (vel > 60) {
        res.innerHTML += ` Sua velocidade ultrapassou 60Km/h. MULTADO!`
    }
}
