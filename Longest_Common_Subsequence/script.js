function LCS(x, y) {
  return y.split('').reduce(function (coincidences, letter){
    if(x.includes(letter)){
      coincidences += letter;
      x = x.substring(x.indexOf(letter)+1, x.length);
    }
    return coincidences;
  }, '');
}
