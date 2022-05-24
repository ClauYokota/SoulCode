/**
 * Propriedades/Atributos
 * Métodos/Funções
 */

//Javascript Object Notation (Json) = 

let pessoa = {     //{} -> determina as características de um objeto
    nome: 'João', //propriedade
    idade: 28,
    cpf: '123.456.789-65',
    endereço: {
        cidade: 'São Paulo',
        estado: 'São Paulo',
        cep: '623900-00'
    },

    /* cumprimentar: function () {
        console.log('Olá pessoinha')} */
        cumprimentar(){
            console.log('Olá mundo')
    }
}

console.log(pessoa)
console.log(pessoa.nome)

console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} e eu moro em ${pessoa.endereço.cidade}.`)


pessoa.idade = 29



console.log(pessoa.idade)
console.log(pessoa['idade'])
console.log(pessoa[`idade`] === pessoa.idade)

console.table(pessoa)

pessoa.cumprimentar()
pessoa['cumprimentar']()
