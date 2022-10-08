const nums= [1,2,3,4,5,6,7,8,9,10]

/* for (let num of nums){
    console.log(num)
} */

nums.forEach((x) => {
   // document.write(`<p>${x}</p>`)
console.log(x)
//return n retorna nada = undefined
})


//gera um novo array com o mesmo tamanho

/* let novoArray = nums.map(x => x**2)

console.log(novoArray) */

let novoArray = nums.map(x =>{
    return x**2
})

//o filter pode te retornar uma variável com a mesma quantidade de variáveis ou menos
let numerosPares = nums.filter(function(x){
    return x % 2 == 0
})
console.log(numerosPares)

//te retorna apenas um único valor
let numeroMaiorQue5 = nums.find((y) =>{
    return y>5
})
console.log(numeroMaiorQue5)


let indiceNumeroMaiorQue5 = nums.findIndex( numero =>{
    return numero>5
})
console.log(indiceNumeroMaiorQue5) //posição da variável
console.log(nums[indiceNumeroMaiorQue5]) //a variável 


const nomes = ['Amanda','André','Andrew','Antonio','Barbara','Carolina','Bruno','Claudia','Debora']

let nomesComCaracteresAcimaDe6 = nomes.filter(nome => {
    return nome.length > 6
})
console.log(nomesComCaracteresAcimaDe6)

let newArr = nomes.map(nome => nome.length)
console.log(newArr)

let existeAlgumNomeCom8Caracteres = nomes.some(function(nome){
    return nome.length = 8
})
console.log (existeAlgumNomeCom8Caracteres) //true

let todosOsNomesPossuem8Caracteres = nomes.every(nome =>{
    return nome.length>=7
})
console.log(todosOsNomesPossuem8Caracteres)//false

let novo = nums.concat([20,30,40]) //adiciona os numeros no array existente
console.log(novo)

console.log(nums.join('-')) //une os valores do array com o () e o transforma em string

console.log(nums.includes(8)) //true

console.log(nums)
nums.pop() //deletar o ultimo elemento do array
console.log(nums)

nums.shift() //remove o primeiro elemento
console.log(nums)

nums.unshift(1) // adiciona valor no inicio do array

nums.push(10) //adiciona valor no  final da array

nums.indexOf() //orbigatoriamente procura um indice que for igual ao outro   já o findIndex da para escolher os parametros para se procurar o indice

nums.reverse() //inverte a ordem dos valores dentro da array

nums.slice(2,5) // te retorna os valores dentro dos indices pedidos do 2 ao 5

console.log(nums.slice(-10)) //te mostra o ultimo número


nums.splice(1,5) // recorta aonde quer que comece, e quantos valores quer que pegue

nums.reduce((acumulador,valoratual) =>{
    console.log(`àcumulador = ${acumulador}, valor atual = ${valoratual} `)
    return acumulador + valoratual
}) //pega todos os valores do array e o transforma em uma coisa só          acumulador inicia com o primeiro valor do array

let soma = nums.reduce((acumulador, valoratual) => acumulador + valoratual, 0) //faz com que o acumulador comece com o valor 0
console.log(soma)


[5,6,10,20].map(x=>x*2).map(x=>x % 2 == 0).every(x =>x )


let a = nomes
.filter(nome => nome.length>6)
.map(nome =>nome.length)
.reduce((acc,atual)=>acc*atual)

console.log(a)