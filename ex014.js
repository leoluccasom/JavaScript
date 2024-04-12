let num = 1 

function global(){
    let num = 5
    return num
}

console.log(global())
console.log(num)

/////////////////////////////////////////////////// Escopo de bloco e global

function func( a, b, c) {
    return a
}

console.log(func('Retorna o valor de a'))
