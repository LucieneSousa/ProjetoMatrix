function verificaNumeroValido(num){
  return typeof num === 'number';
}


  
function somarInteiros(num){
    var somarInteiros = 0;
    if(num % 2 != 0){
        
    for(i=1; i<=num;i++){    
            somarInteiros = somarInteiros + i;    
        }     
    } 
    return somarInteiros;
}


function somarImpares(num){
    var verificado = verificaNumeroValido(num);
    if (verificado){
        return somarInteiros(num);
    }      
}

 console.log(somarImpares(15));