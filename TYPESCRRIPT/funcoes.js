"use strict";
function mostrarMensagem() {
    console.log('Olá, mundo');
}
mostrarMensagem();
function mostrarMensagem2(msg) {
    console.log(msg);
}
mostrarMensagem2('Olá, Typescript');
function mostrarMensagem3(msg) {
    console.log(msg);
}
/* function somar(a: number, b:number): number{
    return a + b
} */
function somar(...nums) {
    return nums.reduce((x, y) => x + y, 0);
}
somar(5, 8, 3, 9);
function forEach(array, fn /* =any */) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
;
let arr = [1, 2, 3, 4, 5, 6, 7];
forEach(arr, (x) => {
    console.log(x + 5);
});
arr.forEach((x) => {
    console.log(x + 5);
});
