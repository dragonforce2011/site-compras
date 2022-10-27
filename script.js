function calcularProduto() {
    var preco_string = document.getElementById("preco").textContent;       
    var preco_string_sem_currecy = preco_string.replace("R$ ", "").replace(",", ".");        
    var preco = parseFloat(preco_string_sem_currecy);    
    var qtd = document.getElementById("quantidade").value;
    var resultado;
    

    if (isNaN(qtd)) { 
        document.getElementById("total").value=' '   
        return 0;   
    } else if (qtd == 1) {    
        resultado = (preco*qtd).toFixed(2).replace(".", ",");  
        document.getElementById("total").value='R$ ' + resultado 
    } else if (qtd == 2) {    
        resultado = (preco*qtd).toFixed(2).replace(".", ","); 
        document.getElementById("total").value='R$ ' + resultado             
    } else if (qtd == 3) {    
        resultado = (preco*qtd).toFixed(2).replace(".", ","); 
        document.getElementById("total").value='R$ ' + resultado             
    } else if (qtd == 4) {    
        resultado = (preco*qtd).toFixed(2).replace(".", ","); 
        document.getElementById("total").value='R$ ' + resultado             
    } else if (qtd == 5) {    
        resultado = (preco*qtd).toFixed(2).replace(".", ","); 
        document.getElementById("total").value='R$ ' + resultado             
    }       
}   

function compraFinalizada(){
    alert("Successful purchase!");
}