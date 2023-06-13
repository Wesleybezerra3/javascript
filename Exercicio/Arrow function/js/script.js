//Arrow function
//Sintaxe
/* 
 (a, b)=>{
    return a + b;
 }

 (a , b )=> a + b;
*/

let a = 5;
let b = 10;

let c = (num1 , num2) => num1 + num2;
 console.log(c(a,b))

let d = (x, y) => {
   
 let op;
 if(x >5){
    op = x * y;
 }else{
    op = x / y 
 }
   return op; 
}
console.log(d(a,b));

//um argumento
let frase = "O Wesley é um ótimo dev";

let fraseArray = (frase) => frase.split(' ');

console.log(fraseArray(frase));

// sem argumento

let semArg = () => console.log("Não tenho argumento")
semArg()

let roupas = [
    
{produto: 'Camisa', preco: 25, cor: 'Amarelo'},
{produto: 'Calça', preco: 80, cor: 'Azul'},
{produto: 'Jaqueta', preco: 100, cor: 'Preto'},
{produto: 'Camiseta', preco: 15, cor: 'Rosa'},   {produto: 'Calção', preco: 20, cor: 'Azul'},
     

];
let maiorque50 = roupas.filter((roupas) => {
    return roupas.preco >= 50
})
    

console.log(maiorque50);



