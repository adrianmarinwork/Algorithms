function replaceZero(arr){
  
  let obj = {'index' : 0, 'length': 0};  
  let previousZero = 0, actualZero, nextZero, length;
  for(let i = 1; i<=arr.length; i++){
    if(arr[i-1] === 0){
      actualZero = i;
      nextZero = [...arr].slice(i, arr.length).indexOf(0);
      nextZero = (nextZero === -1) ? arr.length + 1  : (nextZero + 1) + actualZero;
      length = (actualZero - previousZero) + (nextZero - actualZero) - 1;
      if(obj['length'] <= length){
        obj['index'] = i;
        obj['length'] = length;
      }
      previousZero = actualZero;
    }    
  }
  
  return obj['index'] - 1;
  
}
