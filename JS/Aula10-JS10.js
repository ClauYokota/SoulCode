/* let ps = document.getElementsByTagName('p')
console.log(ps) 

let diferente = document.getElementsByClassName('diferente')
console.log(diferente)

let paras = document.getElementsByName('para')
console.log(paras[1], paras[3])

let ids = document.getElementById('unico') //retorna apenas o primeiro elemento que encontrar
console.log(ids)

let bt = document.querySelector('#botao')
console.log(bt)

let x = document.querySelector('[name="para"]')
console.log(x)

let ai = document.querySelector('a') //retorna apenas o primeiro elemento que encontrar
console.log(ai)

let as = document.querySelector ('a:visited') //= null, pois não consegue acessar as pseudo classes do css
console.log(as)

let al = document.querySelectorAll('a') //retorna todos os elementos
console.log(al)
 */

let valoresAPI = ['Amanda','André','Andrew','Antonio','Aurelio','Manuela']
const div = document.getElementById('lista')
const btn = document.querySelector('button')

//para cada elemento do array criar uma li e add na ul criada

btn.addEventListener('click', () => {
    const uL = document.createElement('ul') //cria um novo elemento html

    valoresAPI.forEach((valor)=>{
        const Li = document.createElement('li')
        
        Li.textContent = valor

        uL.appendChild (Li)
    })
          
    div.appendChild (uL) //adiciona um elemento filho ao elemento html
    console.log(div)
})


