let amigo = { nome : 'josé',
sexo :'m', 
peso:'85.4',
 engondar(p = 0){
console.log('Engordou')
this.peso += p
} }
amigo.engondar()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)