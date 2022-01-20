function getPINs(observed) {
  const ALLADJACENTNUMBERS = [ [ '8', '0' ], [ '1', '2', '4' ], [ '1', '2', '3', '5' ], [ '2', '3', '6' ], [ '1', '4', '5', '7' ],
                          [ '2', '4', '5', '6', '8' ], [ '3', '5', '6', '9' ], [ '4', '7', '8' ], [ '5', '7', '8', '9', '0' ],
                          [ '6', '8', '9' ] ];
  let adjacentNumbers = [];
  
  do{
    adjacentNumbers[adjacentNumbers.length] = ALLADJACENTNUMBERS[parseInt(observed.substring(0, 1))];
    observed = observed.substring(1, observed.length);
  }while(observed.length > 0);
  
  let combinations = calculateCombinations(adjacentNumbers[0], adjacentNumbers, "");
  
  var regex = new RegExp(`.{1,${adjacentNumbers.length}}`, "g");
  combinations = combinations.match(regex);
  
  return combinations;
}

function calculateCombinations(array, adjacentNumbers, nConcated){
  
  var combination = nConcated, combinations = "";
  
  for(let ele of array){
    combination += ele;
    if(adjacentNumbers.length === 1){
      combinations += combination;
    }
    else{
      combinations += calculateCombinations(adjacentNumbers.slice(1)[0], adjacentNumbers.slice(1), combination);
    }
    combination = nConcated;
  }
  
  return combinations;
}
