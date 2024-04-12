let carro = {
    portas: 4,
    marca:'Honda',
    modelo: 'Civic',
    cambio: 'Automatico'
}
let modelo;
let ternario = carro.portas === 4 ? modelo = '4 portas.' : modelo = '2 portas.'

console.log(ternario)                               ///// Condição com valor ternario (mais fácil).

function func(){
    if (carro.portas === 4) {
        modelo = '4 portas.'
        console.log(modelo)
    } else {                                       //// Condição com if e else.
        modelo = '2 portas.'
        console.log(modelo)
    }
}
func()




