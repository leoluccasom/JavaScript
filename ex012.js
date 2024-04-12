let pessoa = {
    nome: 'joão',
    peso: 70.7,
    idade: 60     
}
function func(){
    console.log(`O seu nome é ${pessoa.nome}, sua idade é ${pessoa.idade} anos e seu peso é ${pessoa.peso}Kg`)
    if (pessoa.idade >=16 && pessoa.idade <18){
        console.log('Voto opcional!')
    } else if ( pessoa.idade >= 18 && pessoa.idade < 60){
        console.log('Voto obrigatório!')
    } else {
        console.log('Não vota!')
    }
}
func()