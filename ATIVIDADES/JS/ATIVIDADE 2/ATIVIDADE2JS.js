let K = parseInt(prompt(`Qual exercício quer ver? 1, 2 ou 3?`))

if (K===1){

    alert('Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal) e receba os números e armazene esses números em um array e depois mostre a soma total deles, a média deles, mostre cada valor em uma potência de 2 e faça a raíz quadrada e cúbica de cada um.')

let qtdNumero = NaN
while(isNaN(qtdNumero) || qtdNumero===0){
     qtdNumero = parseInt (prompt(`Quantos números deseja digitar?`))
}

const numeros=[]

for (let i=0;i<qtdNumero;i++){
    let num=parseFloat(prompt(`Digite o ${i+1}º número.`))
    numeros.push(num)
 }

let soma=0

for(const num of numeros){
    soma+=num
  }


document.write(`<h2>Quantidade de números digitados = ${qtdNumero}</h2>`)
document.write(`<h2>Soma total = ${soma}</h2>`)

const media = soma/numeros.length
document.write(`<h2>Média = ${media.toFixed(2)}</h2>`)

numeros.forEach((x) => {
    document.write(`<hr><h2>número ${x}</h2><ul><li>Potência de 2 = ${x**2}</li><li>Raiz quadrada = ${x**(1/2)}</li><li>Raiz cúbica = ${x**(1/3)}</li></ul>`)

})
}

else if (K===2){

alert('Peça ao usuário digitar algum texto pelo prompt e depois mostre esse texto com todas as letras maiúsculas, com todas as letras minúsculas e depois escreva no console letra por letra do texto que o usuário digitou.')

let texto = prompt(`Digite um texto:`)


alert(texto.toUpperCase())
alert(texto.toLowerCase())
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.split(''))

}

else if (K===3){ 

const nBinario = prompt(`Digite um número binário`).split('').reverse()

let b = 0
for (let j=0;j<nBinario.length;j++){
    b += (2**j)*nBinario[j]
}
console.log(b)
alert(`O número em decimal = ${b}`)

/*
const bin = prompt('Digite um número')
cosnt dec = bin
bin
.split()
.reverse()
.map(x => parseInt(x))
.map((bin, indice) =>{
    if (bin ==1){
        return 2 **indice
    }
    return 0
})
.reduce((x,y) =>x+y)

alert(`${bin} para decimal é ${dec}`)
*/

/*
.map((bin, index) => bin== 1 ? 2 **index : 0)
                    se bin == 1 faça 2**index, senão = 0
*/


/*-------------------------------------------------------------- */


/*
const bin = prompt('Digite um número') 
const dec = parseInt(bin,2)  -> o programa entende automaticamente que transforma em decimal       (x,16) -> hexadecimal
*/

/*--------------------------------------------------------------- */

/*
const bin = prompt('Digite um número')
const dec = eval(`0b${bin}`)

-> o eval transformal qualquer coisa para dentro do JavaScript pelo console
*/

}

else
{alert(`Desculpe, valor inválido.`)}