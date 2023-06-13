var num = [2, 5, 9, 7,]
//Formas de adicionar valor no array
//num[4] = 6 
//num.push (9)
//num.length Comprimento do array
//num.sort() vai ordenar em ordem crescente
num.push (1)
num.sort()

console.log(num)
console.log(`Nosso valor é o ${num}`)
console.log(`o primeiro valor do vetor é ${num[1]}`)
let pos = num.indexOf(3)

if (pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`o valor está na posição ${pos}`)
}
