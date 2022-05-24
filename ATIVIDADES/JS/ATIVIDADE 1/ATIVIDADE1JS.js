let K = parseInt(prompt('Qual exercício quer ver? 1, 2 ou 3?'))

if (K===1){
alert ('Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.')
let a = parseInt (prompt ('Escolha um valor para o lado a do triângulo'))
let b = parseInt (prompt ('Escolha um valor para o lado b do triângulo'))
let c = parseInt (prompt ('Escolha um valor para o lado c do triângulo'))

if (b===a && c===a)
{alert ('O triângulo é equilátero')}

else if (a===b || a===c || b===c)
{alert ('O triângulo é isóceles')}

else
{alert('O triângulo é escaleno')}
}

else if (K===2) { 
alert('Faça um script que leia três números inteiros e mostre o maior deles.')
let n1 = parseInt(prompt('Escolha o primeiro número'))
let n2 = parseInt(prompt('Escolha o segundo número'))
let n3 = parseInt(prompt('Escolha o terceiro número'))

if (n1>=n2 && n1>=n3){
    alert(`O maior número é o ${n1}`)
}

else if (n2>=n1 && n2>=n3){
    alert(`O maior número é o ${n2}`)
}
else{
    alert(`O maior número é o ${n3}`)
}
}

else if (K===3){
alert('Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. Após receber os valores nas variáveis, inverta os valores dentro das variáveis, ou seja, o valor da variável x vai para a variável y e o valor da variável y vai para a variável x. Mostre o antes das variáveis e seu depois.')

let x 
let y

while (isNaN(x) || x%1!==0){
x = parseFloat(prompt('Escolha um valor inteiro para X'))}

while (isNaN(y) || y%1!==0){
y = parseFloat(prompt('Escolha um valor inteiro para Y'))}

let z = x
document.write(`<p>X = ${x} e Y = ${y}</p> <p> X = ${x=y} e Y = ${y=z}</p>`)

} 

else 
{alert('Desculpe, valor inválido')}
