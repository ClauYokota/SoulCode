/*
1- Array
2- Pega cada valor do array e transforma em algo diferente
3- Gera um novo array com os valores modificados
4- Retorna o novo array
*/

//['João', 'Maria','Paulo'],(valor)=> quantidadeDeCaracteres


function mapear(array, funcao){
    const novoArray = []

    for (let i=0; i< array.length; i++){
        const valor = funcao(array[i])
        novoArray.push(valor)
    }

    return novoArray
}

let nomes = ['João', 'Maria','João','Roberto']
let novo = mapear (nomes,(nome)=>{
    return nome.length
})

console.log(novo)



const novo2 = nomes.map(y=>{
    return y.length
})
console.log(novo2)

