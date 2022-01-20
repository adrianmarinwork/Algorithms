function scramble(str1, str2) {
  
  var [arrayStr1, arrayStr2] = [countLetters(str1), countLetters(str2)];
  var cnt = 0;
  
  for(var i = 0; i<arrayStr2.length; i++){
    if(arrayStr2[i] != 0 && arrayStr1[i] >= arrayStr2[i]){
        cnt += arrayStr2[i];
    }
  }
  
  return cnt === str2.length;
  
}

function countLetters(str) {
  
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var arrayCnts = [];
  arrayCnts.length = letters.length;
  arrayCnts.fill(0);
  
  for(const ele of str){
    arrayCnts[ele.charCodeAt(0) - 97]++;
  }
  
  return arrayCnts;
}
