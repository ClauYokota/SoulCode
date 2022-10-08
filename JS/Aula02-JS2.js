/*&& CONDIÇÃO VERDADE (E)
V V = V
V F = F
F V = F
F F = F


|| CONDIÇÃO VERDADE (OU)
V V = V
V F = V
F V = V
F F = F
*/


/* let nota1 = parseFloat (prompt ('Informe a 1 nota'))  //transforma uma string em um valor numérico decimal
let nota2 = parseFloat (prompt ('Informe a 2 nota'))
let nota3 = parseFloat (prompt ('Informe a 3 nota'))
let qtdFaltas = parseInt (prompt ('Informe a quantidade de faltas'))

const media = (nota1+nota2+nota3)/3

alert('Sua média é: '+ media)


if (media > 7 && qtdFaltas <=3) 
{ alert ('PARABÉNS! Passou acima da média!')}

else if (media=== 7 || qtdFaltas <=3)
{alert ('QUASE NÃO PASSOU, HEIN!')}

else 
{alert ('RECUPERAÇÃO!')}

 */

/* // (!) CONDIÇÃO DE NEGAÇÃO
console.log(true)
console.log(!true)

let nota1 = parseFloat (prompt ('Informe a 1 nota'))  //transforma uma string em um valor numérico decimal
let nota2 = parseFloat (prompt ('Informe a 2 nota'))
let nota3 = parseFloat (prompt ('Informe a 3 nota'))


const media = (nota1+nota2+nota3)/3
const alunoPassou = media >= 7

alert('Sua média é: '+ media)


if (!alunoPassou) 
{alert ('RECUPERAÇÃO!')}

else 
{ alert ('PARABÉNS! Passou acima da média!')}
 */


/* const qtNotas = parseInt (prompt('Quantas notas devem ser recebidas?'))


let soma = 0 */

/*
let i = 0 //variável contadora

while (i < qtNotas) //variável booleana
{
    const nota = parseFloat(prompt('Informe a nota ' +(i+1)))

    soma = soma + nota

    i++
 }
 */


/* for (let i = 0; i<qtNotas; i++){
    const nota = parseFloat (prompt(`Digite a nota ${i+1}`))
    soma += nota // soma = soma + nota
}

 const media = soma/qtNotas
 alert(`Sua média é ${media}`) */


/*  
    document.write('<h1>Olá mundo</h1>')
    document.write('<p>Hello</p>')
 */


let ntab = NaN

while(isNaN(ntab) || ntab==0){
    ntab = parseFloat (prompt('Escolha um número!'))
}


document.write ('<h1>Tabuada do número ' + ntab + '</h1>')

for (let i=1;i<=1000;i++) {
/*       let tab = ntab*i

     document.write(ntab +' x ' + i + ' = ' + tab+'<br>') */

     document.write(`<p>${ntab} x ${i} = ${ntab*i}</p>`)
 }

 