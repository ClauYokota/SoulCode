function eqsegundograu(a,b,c){
    let delta=(b**2)-(4*a*c)
    const x1 = (-b+(delta**0.5))/(2*a)
    const x2 = (-b-(delta**0.5))/(2*a)
    //return [x1,x2]
    return{
        x1,   //x1:x1
        x2    //x2:X2
    }
}
console.log(eqsegundograu(1,-1,-12))
//4,-3


/* let sub = function(c,d){
    if (d>c){
        return d-c
    } else{
        return c-d
    }
} */


//arrow function -> sempre são funções anônimas 

const f = () => 5

const dobro = k => 2*k

const somar = (z,y) => z+y  //quando há mais de um parâmetro colocar entre () 

let sub = (c,d) => {
    if (d>c){
        return d-c
    } else{
        return c-d
    }
}
const resultado = sub(5,6)
console.log(resultado)

const r = somar(5,8)
console.log(r)

console.log(dobro(20))
