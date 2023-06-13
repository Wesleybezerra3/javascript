/*
Funções são ações executada assim que são chamadas ou em decorrência de algum evento.

uma função pode receber parâmetros e retornar um resultado.
*/
function parimp(n){
    if ( n% 2== 0) {
        return "par"
        
    } else {
     return "impar"   
    }
}

let res = parimp(2)
console.log(res)
 
function soma( n1 = 0  ,n2= 0){
    return n1 + n2 

}
console.log(soma(7 , 9))

/*let v = function(x){
    return x*2
}
console.log(v(5))
 */
//5! = 5 x 4 x 3 x 2 x 1 
/*
function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c-- ) {
        fat *= c
        
    }
    return fat
}
console.log(fatorial(5))*/

//Recursividade
 /*function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
 }
console.log(fatorial(5))
*/
function primeiraFuncao(){
    console.log("hello world das funções")

}
primeiraFuncao();

function dizerNome(nome){
    console.log(`O nome é ${nome}`)

}
dizerNome("Wesley");

var nomeDoBancoDeDados = 'João';
dizerNome(nomeDoBancoDeDados);

function soma(a,b){
    var soma= a + b;
    return soma;
}
var somaUm = soma(2,4)
console.log(somaUm)

console.log(soma(19,4))