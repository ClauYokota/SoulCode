//FUNÇÃO

function cumprimentar (){
    alert('Olá, usuário!')
}

function cumprimentar2 (mensagem = 'Hello World'){
    alert(mensagem)
}

/* cumprimentar()
cumprimentar2('Olá, usuário')
cumprimentar2('Olá mundo!')
cumprimentar2() */

criarPAragrafo('A vida não é aleatória por acaso')

function criarPAragrafo(txt){
    document.write(`<p>${txt}</p>`)
}

criarElemento('Olá mundo','h1')
criarElemento('Olá mundo','h2')
criarElemento('Olá mundo','h3')
criarElemento('Olá mundo','h4')
criarElemento('Olá mundo','h5')
criarElemento('Texto aleatório','div')
criarElemento('xxxxx')

function criarElemento(txt,elemento='p'){
    document.write(`<${elemento}>${txt}</${elemento}>`)
}

function somar(a,b){
    return a + b    //usar console.log(a+b) não há retorno -> resultado = undefined
}

function subtrair(a,b){
    if (b>a){
        return b-a
    }else{
        return a-b
    }
}

function imc(peso,altura){
    return parseFloat((peso / (altura**2)).toFixed(2))
}

let total = somar(5,6)
console.log(`total = ${total}`)

total = subtrair(10,20)
console.log(`total = ${total}`)

let resultadoimc = imc(72,1.7)
console.log(resultadoimc)

console.log(imc(72,1.7))