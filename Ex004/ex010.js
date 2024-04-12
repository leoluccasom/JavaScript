
function parimp(n){
    if (n%2 == 0) {
        return `O número ${n} é par`
    }else {
        return `O número ${n} é ímpar`
        
    }
}
console.log(parimp(112))
/////////////////////////////////////


function soma(n1=0,n2=0){
    return n1 + n2              
}
//////////////////////////////////
console.log(soma(2,5))          //somar colocando o paramentro no console

function soma1(n1=5,n2=5){
    return n1 + n2
}
console.log(soma1())    //somar colocando o paramentro no atributo
/////////////////////////////////
let n1 = 2
let n2 = 10

function somar() {
    return n1 + n2
}
console.log(somar())            //somar criando uma variavel

