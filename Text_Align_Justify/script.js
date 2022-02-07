function justify(text, width) {
  
  //Split text by each space and add space to the end of each word
  text = text.split(' ').map(word => word + ' ');
  let finalText = '';
  let rest = width;
  let array = [], last = false;
  
  //Iterate all words of the text
  for(let i = 0; i<text.length; i++){
    
    //If the rest minus the word length with or without space is bigger or equal than 0 that means that the word still fits in the justify length.
    if(rest - text[i].length >= 0 || rest - text[i].trim().length >= 0){
      array.push(text[i]);
      rest -= text[i].length;
    }
    else{
      
      //If the length of the justify makes that only one word enters in the line, we make that line without spaces
      if(array.length === 1){
        array[0] = array[0].trim();
      }    
      else{
        
        //Remove the blank space from the last word that is going to be added in the line
        array[array.length - 1] = array[array.length - 1].trim();
        rest += 1;
        
        //Check if because removing the space, it fits another word
        if(rest - text[i].length >= 0){
          //Add the blank space we removed
          array[array.length - 1] = array[array.length - 1] + (' ');
          rest -= 1;
          array.push(text[i]);
          array[array.length - 1] = array[array.length - 1].trim();
          rest -= (text[i].length);
          last = true;
        }
        
        //Iterate the words to add the needed spaces with the rest 
        let j = 0;
        while(rest > 0){
          array[j] = array[j] + ' ';
          j++;
          rest -= 1;
          if(j === array.length - 1){
            j = 0;
          }
        }
        
      }
      
      finalText += (array.join('') + '\n');
      if(!last){
        rest = (width - text[i].length);
        array = [text[i]];
      }
      else{
        rest = width;
        array = [];
        last = false;  
      }
    }
  }
  
  finalText += array.join('');
  
  return finalText.substring(0, finalText.length - 1);
}
