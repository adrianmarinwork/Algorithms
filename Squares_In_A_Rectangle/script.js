function findSquares(x,y){
  
  var sum = 0;
  for(var i = 1; i<=y; i++){
    sum += (x-i+1) * (i<y ? y-i+1 : 1);
  } 
  return sum;
}
