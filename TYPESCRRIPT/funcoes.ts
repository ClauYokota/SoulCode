function mostrarMensagem(){
    console.log('Olá, mundo')
}
mostrarMensagem()

function mostrarMensagem2(msg:string) {
    console.log(msg)
}

mostrarMensagem2('Olá, Typescript')

function mostrarMensagem3(msg:string):void {
    console.log(msg)
}

/* function somar(a: number, b:number): number{
    return a + b
} */

function somar(...nums: number[]): number{
    return nums.reduce((x,y) => x+y,0) 
} 

somar(5,8,3,9)

function forEach(array:any[],fn: (x:any)=>void /* =any */):void {
    for(let i = 0; i < array.length; i++){
        fn(array[i])
    }    
};

let arr = [1,2,3,4,5,6,7]

forEach(arr, (x)=>{
    console.log(x + 5)
})

arr.forEach((x) =>{
    console.log(x+5)
})