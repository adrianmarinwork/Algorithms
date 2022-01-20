function solution(list){

  var strFinal = "", nextNumber = 0;
  
  for(var i = 0; i < list.length; i++ ){
    
    if(list[i] + 1 != list[i + 1]){
      strFinal += (list[i] + ',');
    }
    else{
      for(var j = i; j < list.length; j++){
        if(list[j] + 1 === list[j + 1]){
          nextNumber++;
        }
        else{
          break;
        }
      }
      
      if(nextNumber === 1 ){
        strFinal += (list[i] + ',' + list[i+1] + ",");
      } 
      else{
        strFinal += (list[i] + '-' + list[nextNumber + i] + ',');
      }
      
      i = (nextNumber + i);
      nextNumber = 0;
    }
  }
  
  return strFinal[strFinal.length -1] === ',' ? strFinal.substring(0, strFinal.length -1) : strFinal;
  
}
