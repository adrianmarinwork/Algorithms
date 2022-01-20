function rotate(matrix, direction) {
  
  var [finalMatrix, auxArray] = [[], []];
  
  if(direction === 'clockwise'){
    
    for(var i = 0; i<matrix[0].length; i++){
        
        auxArray = [];
        
        for(var j = matrix.length - 1; j>=0; j--){
        
            auxArray.push(matrix[j][i]);
        }
        
        finalMatrix.push(auxArray);
      }
  }
  else{
    for(var i = matrix[0].length -1; i>=0; i--){

        auxArray = [];

        for(var j = 0; j<matrix.length; j++){

            auxArray.push(matrix[j][i]);
        }
        finalMatrix.push(auxArray);
    } 
  }
      
  return finalMatrix;  
  
}
