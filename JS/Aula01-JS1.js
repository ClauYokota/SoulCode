/* 
alert("Olá Mundo") // Abre um pop-up na tela com botao de confirmar.
prompt("Qual o seu nome?") // Abre um pop-up com caixa de digitacao.
confirm("Sair da pagina?") // Abre um pop-up com botoes de confirmar ou cancelar.


var nome = prompt ('Qual o seu nome?')
alert(nome)

let idade = prompt ('Quantos anos você tem?')
alert ('Você tem ' + idade + ' anos')

console.log('Olá '+nome +', você tem '+idade +' anos.') 


const pi = 3.14

console.log(pi)

let string = 'Olá mundo'
let string2 = "Olá mundo"
let string3 = `Olá mundo`

var n = 5
var n2 =  5.63


const bool = true
const bool2 = false

let soma = n+n2+7
console.log(soma)

let sub = n2-n
console.log(sub)

let multi = 45*5
console.log(multi)

const div = 9/3
console.log(div)

const media = (7 + 5 + 9.5 + 4 + 8) / 5
console.log(media)

console.log(9 % 2)  // mostra o resto da divisão */ 

/* 
let a = 6 //number
let b = '6' //string
let c = 8

console.log(a == b) // compara apenas o conteúdo
console.log(a===b) // compara o tipo e o conteúdo 
console.log( a != b) // diferença 
console.log(a !== b)
console.log(a>c)
console.log(a<c)
console.log(a>=c)
console.log(a<=c)
 */ 



//parseInt ('56') //transforma uma string em um número inteiro
//parseInt ('56.5') = 56

/*&& CONDIÇÃO VERDADE
V V = V
V F = F
F V = F
F F = F
*/
let nota1 = parseFloat (prompt ('Informe a 1 nota'))  //transforma uma string em um valor numérico decimal
let nota2 = parseFloat (prompt ('Informe a 2 nota'))
let nota3 = parseFloat (prompt ('Informe a 3 nota'))
let qtdFaltas = parseInt (prompt ('Informe a quantidade de faltas'))

const media = (nota1+nota2+nota3)/3

alert('Sua média é: '+ media)


if (media > 7 && qtdFaltas <=3) 
{ alert ('PARABÉNS! Passou acima da média!')}

else if (media=== 7 && qtdFaltas <=3)
{alert ('QUASE NÃO PASSOU, HEIN!')}

else 
{alert ('RECUPERAÇÃO!')}

