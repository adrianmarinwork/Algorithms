function solution(input, markers) {
  
  input = input.replace(/\n/g, 'ç');
  let deleteMode = false, solution = '';
  
  for(let i = 0; i<input.length; i++){
    if(markers.includes(input[i])){
      deleteMode = true;
    }
    else if(input[i] === 'ç'){
      deleteMode = false;
    }
    
    if(!deleteMode){
      solution += input[i];
    }
  }
  
  solution = solution.replace(/ç/g, '\n');
  let solutionArray =  solution.split(' ');
  solution = '';
  
  for(let word of solutionArray){
    if(/^[\n]/.test(word)){
      solution = (solution.substring(0, solution.length - 1) + word);
    }
    else{
      solution += (word + ' ');
    }
  }
  
  return solution.trim();
};
