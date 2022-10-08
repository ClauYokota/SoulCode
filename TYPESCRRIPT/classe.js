"use strict";
class Pessoa {
    /*     private nome:string
        private email:string
        private senha:string | number
    
        constructor(nome:string, email:string, senha:string|number) {
            this.nome = nome
            this.email = email
            this.senha = senha
        } */
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    cumprimentar(num) {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${num} anos.`);
    }
    cumprimentarComRetorno() {
        return `Olá, meu nome é ${this.nome}`;
    }
}
let pp = new Pessoa('Pedro', 'pedro@gmail.com', 12345678);
/* pp.cumprimentar(20)

console.log(pp.cumprimentarComRetorno()) */
/* console.log(`Nome = ${pp.nome}`) */
