class Produto{
    constructor(){
     this.id = 1;
     this.arrayProdutos=[]
    }
    salvar(){
       let produto =this.lerDados()

       if(this.validarCampos(produto)){
       this.adicionar(produto)
       }
       console.log(this.arrayProdutos)
    }
    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }
    lerDados(){
     let produto = {}

     produto.id = this.id
     produto.nomeProduto=document.getElementById('produto').value
     produto.preco = document.getElementById('preco').value
     return produto
    }
    validarCampos(produto){
        let msg = ''
        if(produto.nomeProduto==''){
            msg += '- Informe o Nome do produto \n'
        }
        if(produto.preco==''){
            msg += '- Informe o Preço do produto \n'
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    cancelar(){
     
    }
}
var produto= new Produto();




