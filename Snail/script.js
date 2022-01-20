snail = function(array) {
  
  var arraySolution = [];
  var direction = 'right';
  
  if(array[0].length === 0){
    return arraySolution;
  }
  
  //We iterate till the array is empty, that means that we have taken all its values
  while(array.length != 0){
    
    switch(direction){
      case 'right':
        
        //We fill the arraySolution with the values of the first array (row)
        do{
          
          arraySolution.push( array[0].splice(0, 1)[0] );
          
        }while(array[0].length != 0);
        
        //Remove the array left without values
        array.splice(0,1);
        
        
        direction = 'down';
      break;
      case 'down':
        
        //The cnt var increments to move down while we take the value from the last column in each row
        var cnt = 0;
        do{
          
          arraySolution.push( array[cnt].splice(array.length, 1)[0] );
          cnt++;
          
        }while(cnt < array.length);
        
        direction = 'left';
      break;
      case 'left':
        
        //The cnt var is equal to the last value in a row of the array and we decrementit while we take the values from the last row 
        var cnt = array.length - 1;
        do{
          
          arraySolution.push( array[array.length - 1].splice(cnt, 1)[0] );
          cnt--;
          
        }while(cnt >= 0);
        
        //Remove the array left without values
        array.splice(array.length - 1, 1);
        
        direction = 'up';
      break;
      case 'up':
        
        //The cnt var is equal to the last value in a column of the array and we decrementit while we take the values from down to the top in the first column
        var cnt = array.length - 1;
        do{
          
          arraySolution.push( array[cnt].splice(0, 1)[0] );
          cnt--;
          
        }while(cnt >= 0);
                
        direction = 'right';
      break;
    }
  }
  
  return arraySolution;
  
}
