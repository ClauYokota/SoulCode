//let x=0
/* 
console.log(x++) //0
console.log(x++) //1
console.log(x++) //2
 */

/* console.log(x++)// 0 + 1  - >  1 pós incremento, mostra o 0 primeiro e depois incrementa ele 
console.log(++x) // 1 + 1 - >  2 pré incremento já mostra a soma direto 

let y=0
console.log(y--) //0
console.log(--y) //-2
 */

//rest operator
function somar(...numeros){  //... faz numero=[]
            //(a,...numeros) sempre deixar por ultimo por ele receber quant infinita de valores
    let somaTotal = 0

    for (let numero of numeros){
        somaTotal += numero
    }
    return somaTotal
}

//console.log(somar([1,2,3,4,5,6]))

let total = somar(1,2,3,4,5,6,7,8,9,10)
console.log(total)


let p ={
    nome: 'Amanda',
    idade: 25
}

/* let p2=p

p2.nome = 'André'

console.log(p) //André
console.log(p2) //André */

let p2 = { ...p} //criando uma cópia do p
p2.nome = 'André'

console.log(p) //Amanda
console.log(p2) //André


let arr=[4,5,6]
let arr2=[...p]

