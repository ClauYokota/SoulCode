/* 
const array = new Array(i)
const array = [1,2,3,4,5]
const nome = ['Amanda', 'André', 'Andrew', 'Antonio']
const arrBidimensional = [
    [1,2,3,4,5],
    [1,5,4,7,8], 
    [1,3,4,5,6],
]

console.log(array)
console.log(array[0])
console.log(nome[0],nome[2])

console.log(arrBidimensional [2][3]) 

console.log(array.length) */

/* 
const qtNotas = parseInt(prompt('Quantidade de notas'));
let i=0;
const array = new Array();
let media=0;
while (i<qtNotas)
{
    let nota= parseFloat(prompt(`Insira a nota ${i+1}`));
    array[i] = nota;
    media+=array[i];
    i++;
   
}

document.write(`A média é ${media/qtNotas}`);

 */


const qtNotas = parseInt(prompt('Quantas notas devem ser recebidas?'))
const notas=[]

for (let i=0; i<qtNotas;i++){
    /* notas[i]=parseFloat(prompt(`Digite a nota ${i+1}`)) */
    let nota= parseFloat(prompt(`Digite a nota ${i+1}`))
    notas.push(nota)
}

let soma=0

/* for (let i=0; i<notas.length;i++){
 soma+=notas[i]
} */
for(let nota of notas){
    soma+=nota
}

const media= soma/notas.length


//let media = notas.reduce ((x,y) => x+y) / notas.length

document.write(`A sua média é ${media.toFixed(2)}`) //casas decimais