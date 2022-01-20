function gap(g, m, n) {
    
  var primeNumbers = calculatePrimeNumbers(m, n);
  var res = [];  
  
  console.log(primeNumbers);
  
  for(var i = 0; i<primeNumbers.length; i++){
    if(primeNumbers[i] + g === primeNumbers[i+1]){
      res.push(primeNumbers[i]);
      res.push(primeNumbers[primeNumbers.indexOf(primeNumbers[i] + g)]);
      break;
    }
  }
  
  return res.length === 0 ? null : res;
  
}

function calculatePrimeNumbers(m, n){
  
  var primeNumbers = [];
  
  for (let i = m; i <= n; i++) {
    let flag = 0;

    if(i % 2 == 0){
      flag = 1;
    }
    else{
      for (let j = 3; j <= Math.ceil(Math.sqrt(i)); j += 2) {
        
        if (i % j == 0) {
            flag = 1;
            break;
        }
      }
    }    

    if (i > 1 && flag == 0) {
        primeNumbers.push(i);
    }
  }
  
  return primeNumbers;
  
}
