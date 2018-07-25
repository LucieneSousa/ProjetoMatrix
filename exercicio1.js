function somarInteiros(num){
  var i = 1;
  var somarinteiros = 0;
  if(typeof num  === "number" ){
    for(i=1; i<=num; i++){
      somarinteiros = somarinteiros+i;
    }
    return somarinteiros;
  }
 
}


console.log(somarInteiros("3"));