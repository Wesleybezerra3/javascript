let valores =[5,2,1,3,4]
valores.sort()
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`${pos} tem valor ${valores[pos]}`)
    
}
*/
for (let pos in valores) {
    console.log(`${pos} tem o valor ${valores[pos]}`)
}