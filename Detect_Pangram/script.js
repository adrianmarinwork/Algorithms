function isPangram(string){
  
  var sumaASCII = 0;
  
  string = string.toUpperCase();
  
  string = Array.from(new Set(string)).toString();
  
  for(var i = 0; i<string.length; i++){
    
    if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
      sumaASCII += string.charCodeAt(i);
    }
    
  }
  
  return sumaASCII === 2015 ? true : false;
}
