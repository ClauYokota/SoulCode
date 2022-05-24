//class começa com letra maiúscula
/* class Pessoa{
    
    constructor(){
        this.nome = 'João'
        this.idade = 28
        this.cpf = '123.456.789-65'
    }
}

let p = new Pessoa()

console.log(`Olá, meu nome é ${p.nome}`) */


//this.nome (propriedade) !==  nome (parâmetro) 

class Pessoa{

    constructor(nome,idade,cpf) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
    cumprimentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
    static cumprimentar2(){
        console.log('Olá mundo')
    }
}

let p = new Pessoa('Marcos',20,'123.456.789-98')
let p2 = new Pessoa('Davyson', 25, '123.456.789-42')
let p3 = new Pessoa('Amanda',22,'+62.753.862-24')

const pessoas = [p, p2,p3]

for (let i=0; i<pessoas.length;i++){
    console.log(pessoas[i].idade)
}


for (let pessoa of pessoas){
    console.log(pessoa.nome)
}

for (let pessoa of pessoas){
    pessoa.cumprimentar()
}


console.log(`Olá, meu nome é ${p.nome} e tenho ${p.idade}  anos.`)
console.log(`Olá, meu nome é ${p2.nome} e tenho ${p2.idade} anos.`)
console.log(`Olá, meu nome é ${p3.nome} e tenho ${p3.idade} anos.`)

p.cumprimentar()
p2.cumprimentar()

Pessoa.cumprimentar2()

