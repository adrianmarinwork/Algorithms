var decodeBits = function(bits){
  
  bits = bits.substring(bits.indexOf('1'), bits.length);
  bits = bits.substring(0, bits.lastIndexOf('1')+1);
  
  let ones = 0, zeros = 0, transmissionRate=1;
  for(let i = 0; i<bits.length; i++){
    if(bits[i] === '1'){
      if(zeros > 0){
        break;
      }
      ones++;
    }
    else{
      zeros++;
    }
  }
  
  if(ones === zeros || zeros === 0){
    if(ones % 3 === 0 && zeros != 0){
      transmissionRate = (ones / 3);
    }
    else{
      transmissionRate = ones;
    }
  }
  else if(zeros === 2){
    transmissionRate = 2;
  }  
  
  var regxDash = new RegExp('1{' + (transmissionRate*3) + '}', "g");
  var regxSpace = new RegExp('0{' + (transmissionRate*7) + '}', "g");
  var regxDot = new RegExp('1{' + (transmissionRate) + '}', "g");
  var regxNoSpace = new RegExp('0{' + (transmissionRate*3) + '}', "g");
  var regxNothing = new RegExp('0{' + (transmissionRate) + '}', "g");
  
  return bits.replace(regxDash, '-').replace(regxSpace, '   ')
      .replace(regxDot, '.').replace(regxNoSpace, ' ').replace(regxNothing, '');
}

var decodeMorse = function(morseCode){
    let word = '';
    let everyMorseCode = morseCode.split(' ');

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
