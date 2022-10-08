class Pessoa{
/*     private nome:string 
    private email:string 
    private senha:string | number 

    constructor(nome:string, email:string, senha:string|number) {
        this.nome = nome
        this.email = email
        this.senha = senha
    } */

    constructor(
        private nome: string,
        public email: string,
        protected senha: string|number
    ){}

    public cumprimentar(num:number):void{
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${num} anos.`)
    }
    public cumprimentarComRetorno():string{
        return `Olá, meu nome é ${this.nome}`
    }
}

let pp: Pessoa = new Pessoa('Pedro','pedro@gmail.com',12345678)

/* pp.cumprimentar(20)

console.log(pp.cumprimentarComRetorno()) */

/* console.log(`Nome = ${pp.nome}`) */


