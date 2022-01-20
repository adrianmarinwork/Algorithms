decodeMorse = function(morseCode){
  
  let word = '';
  let everyMorseCode = morseCode.trim().split(' ');
  
  for(var i = 0; i<everyMorseCode.length; i++){
    if(everyMorseCode[i] === ''){
      word += ' ';
      everyMorseCode.splice(i, 1);
    } 
    else{
      word += MORSE_CODE[everyMorseCode[i]];
    }
  }
  return word;
}
