function add(a, b) {
  
  if(a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b;
  }
  else if(b.length > a.length) {
    a = '0'.repeat(b.length - a.length) + a;
  };
  
  let finalNumber = '', aux = 0;
  for(let i = a.length - 1; i >= 0; i--){
    let sumOperation = aux + Number(a[i]) + Number(b[i]);
    if(sumOperation.toString().length > 1){
      aux = Number(sumOperation.toString()[0]);
    }
    else {
      aux = 0;
    }
    finalNumber = sumOperation.toString()[sumOperation.toString().length - 1] + finalNumber;
  }
  
  if(aux != 0){
    finalNumber = aux + finalNumber;
  }
  
  return finalNumber;
}
