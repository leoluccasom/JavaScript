function somar() {
    var tn1 = document.getElementById('textn1')
    var tn2 = document.getElementById("textn2")
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerText = ` A somar de ${n1}+${n2} é igual a : ${s}`
}
