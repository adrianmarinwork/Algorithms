function missing(s) {
 
  let numbers = [], firstNumber, nextNumber, substringLenght = 1, originalNumbers = s, sum;
  
  do{
    
    firstNumber = parseInt(s.substring(0, substringLenght));
    s = s.substring(substringLenght, s.length);
    nextNumber = parseInt(s.substring(0, (firstNumber + 1).toString().length));
    sum = 1;
    if(firstNumber + 1 > nextNumber){
      nextNumber = parseInt(s.substring(0, (firstNumber + 2).toString().length));
      sum = 2;
    }
    
    if(!isNaN(nextNumber)){
      if(firstNumber + 1 === nextNumber || firstNumber + 2 === nextNumber){
        if(substringLenght < (firstNumber + sum).toString().length){
          substringLenght++;
        }
        numbers.push(firstNumber);
      }
      else{
        s = originalNumbers;
        numbers = [];
        substringLenght++;
      }
    }
  }while(s.length > 0);
  
  numbers.push(firstNumber);
  
  let missingNumbers = [];
  
  for(let i = 0; i<numbers.length - 1; i++){
    if(numbers[i] + 1 != numbers[i + 1]){
      missingNumbers.push(numbers[i] + 1);
    }
  }
  
  return missingNumbers.length > 1 || missingNumbers.length === 0 ? -1 : missingNumbers[0];
}
