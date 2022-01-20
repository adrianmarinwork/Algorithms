function removeZeros(array) {
  
  let originalLength = array.length - 1;
  
  let qntyZeros = 0;
  for(let i = 0; i<array.length; i++){
    if(array[i] === 0 || array[i] === '0'){
      qntyZeros++;
    }
  }
  
  let timesZeroMoved = 0;
  let aux1, aux2;
  while(timesZeroMoved != qntyZeros){
    for(let i = 0; i<originalLength; i++){
      if((array[i] === 0 || array[i] === '0')){
        aux1 = array[i];
        aux2 = array[i+1];
        array[i] = aux2;
        array[i+1] = aux1;
      }
    }
    timesZeroMoved++;
  }
  
  return array;
}
