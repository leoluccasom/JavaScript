const a = ['b','c','a']
console.log(`${a[2]}`)
console.log(length = a[1])
a[3] = 'e'
console.log(length = a[3])
a.push('d') // adiciona um elemento
console.log(length = a[4])
console.log(a.length) // lê os vetores do Array
console.log(a.sort()) // Ordem decrescente

for (let pos = 0; pos<a.length;pos++){
    console.log(`A posição ${pos} tem o valor ${a[pos]}`)                        
    //Estrutura de repetição
}
for (let pos in a){
    console.log(a[pos])
    //Estrutura de repetição mais simples
}

console.log(a.indexOf('a')) // Mostra o valor dentro do Array