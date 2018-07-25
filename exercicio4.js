 
function verificaNumeroValido(num){
  return typeof num === 'number'
}

  
function multiplicarInteiros(num){
    var multiplicarInteiros = 1;
    for(i=1; i<=num;i++) {       
        multiplicarInteiros = multiplicarInteiros * i;     
    } 
    return multiplicarInteiros;
}


function resultadoNumInteiros(num){
    var verificado = verificaNumeroValido(num);
    if (verificado){
        return multiplicarInteiros(num);
    }
    return;   
}

 console.log( resultadoNumInteiros(4));
