function persistence(num) {
     
  let cnt = 0, total;
  
  while(String(num).length != 1){
    
    total = 1;
    for(var i = 0; i<String(num).length; i++){
      total *= Number(String(num)[i]);
    }
    
    num = total;
    cnt++;
  }
    
  return cnt;
  
}
