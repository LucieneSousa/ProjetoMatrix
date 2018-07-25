function verificaNumeroValido(num){
  return typeof num === 'number';
}

function ehNumeroImpar(num){
    return num % 2 != 0;
}

  
function somarInteiros(num){
    var somarInteiros = 0;
    for(i=1; i<=num;i++){    
        if(ehNumeroImpar(i)){
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

 console.log(somarImpares(5));