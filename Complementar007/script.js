let num = document.getElementById('num')
let sel = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function isnum(n){
    if (Number(n) >=1 && Number(n) <=100){
        return "true"
    } else {
        return 'false'
    }
}

function inlist(n,l){
    if (l.indexOf(Number(n)) != -1){
        return 'true'
    } else {
        return 'false'
    }
}

function adicionar(){
    if (isnum(num.value) && !inlist(num.value, valores)){
      console.log('TUDO OK')
    } else {
       console.log ('ERRADO')
    }
}
