function formatDuration (seconds) {
  
  if(seconds < 1) return 'now';
  
  let secondsLibrary = [31536000, 86400, 3600, 60, 1];
  let secondsText = ['year', 'day', 'hour', 'minute', 'second'];
  let elements = [], times;
  
  for(let i = 0; i<secondsLibrary.length; i++){
    if(secondsLibrary[i] <= seconds){
      times = Math.floor(seconds / secondsLibrary[i]);
      elements.push(times);
      elements.push((secondsText[i] + ((times === 1) ? '' : 's')));
      seconds -= secondsLibrary[i] * times;
    }
    if(seconds <= 0){
      break;
    }
  }
  
  if(elements.length === 2) return elements.join(' ');  
  if(elements.length === 4){
    return elements[0] + ' ' + elements[1] + ' and ' + elements[2] + ' ' + elements[3];
  } 
  
  for(let i = 1; i<elements.length - 4; i += 2){
    elements[i] = (elements[i] + ',');
  }
  elements.splice(elements.length - 2, 0, "and");
  return elements.join(' ');
}
