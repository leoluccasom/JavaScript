function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano > ano ){
    alert ('[ERRO] Verifique os dados e tente novamente')} else {
        var fsex = document.getElementsByName('radio')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('img')
        if ( fsex [0].checked) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 10) {
                //criança
                img.src = 'bebehomem.jpg'
            } else if ( idade >= 10 && idade < 20) {
                //jovem
                img.src = 'jovemhomem.jpg'
            } else if ( idade >= 20 && idade < 65) {
                //adulto
                img.src = 'adultohomem.jpg'
            } else {
                //velho
                img.src = 'idosohomem.jpg'
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10) {
                //criança
                img.src = 'bebemulher.jpg'
            } else if ( idade >= 10 && idade < 20) {
                //jovem
                img.src = 'jovemmulher.jpg'
            } else if ( idade >= 20 && idade < 65) {
                //adulto
                img.src = 'adultomulher.jpg'
            } else {
                //velho
                img.src = 'idosomulher.jpg'
            }
        }
        res.innerHTML = (`Você é ${genero} e tem ${idade} anos.`)
    }
}