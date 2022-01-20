function parseInt(string) {
  
  var numberValueOfText = {
    'zero': 0,
    'one': 1, 
    'two': 2, 'twenty': 20, 
    'three': 3, 'thirty': 30,
    'four': 4, 'forty': 40,
    'five': 5, 'fifty': 50,
    'six': 6, 'sixty': 60,
    'seven': 7, 'seventy': 70,
    'eight': 8, 'eighty': 80,
    'nine': 9, 'ninety': 90,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19
  }
  
  var multiplications = {
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000
  }
  
  var numbers = string.replace(/-| and /g,' ').split(' ');
  var total = 0, aux = 0;

  for(var i = 0; i<numbers.length; i++){
    let ele = numbers[i];
    
    if(ele != 'thousand' && ele != 'hundred' && ele != 'million'){
      aux += numberValueOfText[ele];
    }
    else{
      if(numbers[i+1]==='thousand' || numbers[i+2]==='thousand' || numbers[i+3]==='thousand'){
         total += aux*100000;
      }
      else{
         total += (aux*multiplications[ele]);
      }
      aux = 0;
    }
  }
  return total + aux; 
}
