function checkBiggerFather(leftFather, rightFather){
  
  return leftFather === undefined ? rightFather : rightFather === undefined ? leftFather : leftFather > rightFather ? leftFather : rightFather;
}

function longestSlideDown (pyramid) {
  
  for(var i = 1; i<pyramid.length; i++){
    for(var j = 0; j<pyramid[i].length; j++){
      pyramid[i][j] += checkBiggerFather(pyramid[i-1][j], pyramid[i-1][j-1]);
    }
  }
  
  return Math.max(...pyramid[pyramid.length-1]);
  
}
