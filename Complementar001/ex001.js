function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'assets/Manhã.jpg'
    document.body.style.background = '#EDEB8A'
}else if ( hora > 12 && hora <= 18){
    //boa tarde
    img.src = 'assets/Tarde.jpg'
    document.body.style.background = '#DA3200'
}else {
    //boa noite
    img.src = 'assets/Noite.jpg'
    document.body.style.background = '#223347'
}
}