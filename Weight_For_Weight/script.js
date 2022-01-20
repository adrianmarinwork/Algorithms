function orderWeight(strng) {
  
  let weights = [], number, sum = 0, numbers = strng.split(' ');
  
  for(let ele of numbers){
    number = parseInt(ele);
    if(isNaN(number)) return '';
    do{
      sum += number % 10;
      number = parseInt(number / 10);
    }while(number != 0);
    weights[weights.length] = {ele, sum};
    sum = 0;
  }
  
  weights.sort(function(a, b) { 
    if(a.sum === b.sum){
      return (a.ele > b.ele) ? 1 : -1 ;
    } 
    return a.sum - b.sum;
  });
  
  let solution = '';
  for(let ele of weights){
    solution += (ele.ele + ' ');
  }
  
  return solution.substring(0, solution.length-1);
}
