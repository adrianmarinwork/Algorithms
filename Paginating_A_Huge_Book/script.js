function pageDigits(pages) {
  
  var cantidadDe0s = countThousands(pages);
  
  var sum = 0n, nueve = 9n;
  
  for(var i = 1n; i<cantidadDe0s; i++){
    sum += nueve * i;
    nueve *= 10n;
  }
  
  return sum += (pages - (handMadePow(cantidadDe0s) - 1n) )*cantidadDe0s;
  
  function handMadePow(cantidadDe0s){
    
    var sum = 10n;
    
    if(cantidadDe0s === 1n){
      return 1n;
    }
    
    for(var i = 1n; i<cantidadDe0s - 1n; i++){
      sum *= 10n;
    }
    return sum;
  }
  
  
  function countThousands(numberPages){
    
    var quotient, cnt = 0n;
    let divisor = 10n;
    
    do{
      quotient = numberPages / divisor;
      divisor *= 10n;
      cnt++;
    }while(quotient.toString().substring(0,1) !== '0')
    
    return cnt;
  }
}
