
function parimp(n){
    if (n%2 == 0) {
        return `O número ${n} é par`
    }else {
        return `O número ${n} é ímpar`
        
    }
}
console.log(parimp(112))



function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(2,5))