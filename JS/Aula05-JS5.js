/* const str = 'Olá, mundo'

console.log(str.length) //qntd de caracteres //os espaços também contam
console.log(str[2])

console.log(str[str.length - 1]) //Para chamar o último elemento de um array ou string 
 */

/* const arr = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4,5,6,7]
]

console.log(arr.length)
console.log(arr[arr.length - 1][arr[arr.length-1].length - 1]) */

const str = 'O homem é o próprio lobo do homem'

console.log(str.length)
console.log(str.indexOf('próprio')) //posição da palavra
console.log(str.indexOf('homem')) 
console.log(str.indexOf('o'))
console.log(str.indexOf('O'))
console.log(str.indexOf('carro')) //valor que n existe = -1

console.log(str.charAt(5)) //retorna o caracter que está na posição
console.log(str.charCodeAt(5)) //retorna o código do caracter no computador

console.log(str.split(' ')) // recorta a string e o transforma em uma posição dentro de um array


console.log(str.concat(' sim', ' pq', ' eu', ' quero')) //junta os textos
console.log(str.concat(' sim pq eu quero'))

console.log(str.toUpperCase()) //pega todas as letras e as coloca maiúsculas
console.log(str.toLowerCase()) //minúsculas


console.log(str.replace('lobo','monstro')) //substitui uma palavra pela outra

console.log(str.replace('homem','pessoa'))
console.log(str.replaceAll('homem','pessoa'))
console.log(str.replace(/homem/g,'pessoa')) //expressão regular  regex

console.log(str.reokace(/homem/gi, 'pessoa')) //pede para procurar a palavra homem independente se está maiúsculo ou minúsculo

console.log(str.startsWith('O homem')) //função booleana que verifica se a frase começa com a palavra homem 

console.log(str.endsWith('O homem'))
console.log(str.slice(12, 24)) //recorta a parte da string a partir do indicado

console.log(str.slice(-5)) //pega os 5 últimos caracteres